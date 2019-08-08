const express = require('express');
const app = express();
const io = require('socket.io')(3001);
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/lastAssignment";

app.listen(3000, function () {
    console.log("Listening on port 3000");
});
// connecting to db
MongoClient.connect(url, function (err, client) {
    date = new Date().toDateString();
    var dbo = client.db("lastAssignment");
    var imageCollection = dbo.collection('images');

    if (err) throw err;
    console.log('Mongo open');

    io.on('connection', function (socket) {
        var userObj = '';
        console.log('socket connected');
        socket.on('getImgs', function (user) {
            var emailUser = user.email;
            console.log('getImages');
            imageCollection.find({ email: emailUser }).toArray(function (err, images) {
                if (err) throw err;
                if (images) {
                    console.log(images);
                    socket.emit('images', images);
                } else {
                    console.log('No images');
                }
            });
        });
        // send images to client
        socket.on('getImgsMap', function () {
            imageCollection.find({}).toArray(function (err, images) {
                if (err) throw err;
                console.log('emitting data');
                socket.emit('imagesMap', images);
            });
        });
        // send likes to client
        socket.on('getLikesMap', function () {
            dbo.collection("likes").find({ userId: userObj._id }).toArray(function (err, likedImgs) {
                if (err) throw err;
                console.log(likedImgs);
                socket.emit('likedImgs', likedImgs);

            });
        });
        //Socket from client, login info
        socket.on('login', function (res) {
            var user = { _id: res.userId, email: res.email, joinDate: date };
            var email = { email: res.email };
            userObj = user;
            dbo.collection("users").findOne(email, function (err, res) {
                if (res) {
                    console.log(res);
                    socket.emit('user', res);
                } else {
                    dbo.collection("users").insertOne(user, { upsert: true }, function (err, res) {
                        if (err) throw err;
                        socket.emit('user', res);
                        console.log(user + 'added to the database');
                    });
                }
            });
        });
        //socket from client, camera image
        socket.on('image', function (img) {
            const image = { email: userObj.email, long: img.long, lat: img.lat, uploadTime: date, image: img.image }

            dbo.collection("images").insertOne(image, function (err, img) {
                if (err) {
                    throw err;
                } else {
                    console.log(img + 'added to the database');
                }
            });
        });
        /*dbo.collection('images').find({}), function(err, data) {
            console.log('---' + data + '---');
            socket.emit('images', data);
        }*/
        //Save the image to db
        socket.on('star', function (img) {
            const likes = { userId: userObj._id, imageId: img };
            dbo.collection('likes').insertOne(likes, function (err, res) {
                if (err) throw err;
                else {
                    console.log("document inserted:" + res);
                }
            });
        });
        /*dbo.collection("likes").findOne(likes, function(err, like) {
             if (err) {
                 throw err;
             } else {
                 dbo.collection("likes").insertOne(likes, function(err){
                     if (err) throw err;
                 }); 
             }  
         });
     });*/
        //Remove the image from db
        socket.on('deleteImg', function (im) {
            console.log(im);
            const image = { _id: ObjectId(im) };
            dbo.collection("images").deleteOne(image, function (err, deleted) {
                if (err) throw err;
                else {
                    console.log("deleted:" + deleted);
                }
            });
        });
        // dislike img
        socket.on('disStar', function (img) {
            const like = { userId: userObj._id, imageId: img };
            dbo.collection("likes").deleteOne(like, function (err, deleted) {
                if (err) throw err;
                else {
                    console.log("deleted like:" + deleted);
                }
            });
        });
    });
});
/*
//EXPRESS
// Extend the basic Express features
app.use(express.static('../../src'));
// use 'extended' to avoid deprecation warning
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));
app.get('*', function (req, res) { });
// The root is "read" for CRUD
app.get('/tabs/tab1', function (req, res, next) { });
// Create (from CRUD)
app.get('/create', function (req, res) { });
// This is also Create (from CRUD)
app.post('/addImg', function (req, res) {
    const userID = '';
    const long = '';
    const lat = '';
    const image = req.files.image;
    // Save the new picture in the DB
    const doc = { "userID": userID, "long": long, "lat": lat, "image": image };
    collection.insertOne(doc, function (err) {
        if (err) console.log(err);
        image.mv('public/images/' + doc._id, function (err) {
            if (err) console.log(err);
        });
    });
});
app.get('/delete/:id', function (req, res) { });
*/
