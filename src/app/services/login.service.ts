import { Injectable, Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';


import { LoadingController, AlertController, Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

//import { platform } from 'os';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { AuthGuard } from '../guards/auth.guard';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: Observable<firebase.User>;
  avatar: any;
  constructor(
    public loadingController: LoadingController,
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform,
    public alertController: AlertController,
    public navCtrl: NavController,
    private storage: Storage,
    private router: Router,
    private socket: Socket
  ) { 
    this.user = this.afAuth.authState;
  }

  login(){
    if(!this.platform.is('cordova')){
      this.nativeGoogleLogin().then( as => {
       // this.router.navigate(['/tabs/tab1']);
        console.log('nativeLogin');
      });
    } else {
      this.webGoogleLogin();
      console.log('webLogin');
    }
  }

//Login function with Google Firebase
  async nativeGoogleLogin(): Promise<firebase.User | void> {
      try {
          const gplusUser = await this.gplus.login({
            'webClientId': '705830739244-ap66lon7fne6c8v2p558m27i3oslth5a.apps.googleusercontent.com',
            'offline': true,
            'scopes': 'profile email'
          })
          this.socket.emit('login', gplusUser);
          this.storage.set('google_user', {
            name: gplusUser.displayName,
            email: gplusUser.email,
            userId: gplusUser.userId,
            avatar: gplusUser.imageUrl
          }).then(
            user => console.log(user),
            error => console.error('Error storing item', error)
          );
           
          return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)).then(() => {
            this.router.navigate(['/tabs/tab1']);
            return;
          });
          //return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))

      } catch(err) {
              console.log(err);
        }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      console.log(credential);
    } catch (err) {
        console.log(err);
    }
  }

  signOut(){
      this.afAuth.auth.signOut().then(() => {
          this.storage.remove('google_user');
          this.router.navigate(['/']);
          console.log('logged out');
      });
      if(this.platform.is('cordova')){
          this.gplus.logout();
      }
  }
 
 /*
  user: any;

  constructor(private googlePlus: GooglePlus, public navCtrl: NavController, private socket: Socket, private storage: Storage) { }

 //Login function, emitting the user credentials to the server to store in db, also saving the username to local
    login() {
        this.googlePlus.login({
        'scopes': '',
        'webClientId': 'webClientId.apps.googleusercontent.com',
        'offline': true
      }).then(res => {
            this.socket.emit('login', res);
            this.user = {
              name: res.displayName,
              email: res.email,
              picture: res.imageUrl
            }
            this.storage.set('google_user', this.user).then(() => {
              this.navCtrl.navigateRoot('/tabs/tab1');
            }, err => {
              console.log('err');
            });
            //emitting the user data to the server to store it in the database
            this.user = res;

        })
        .catch(err => {
          console.error(err)
        }); 
    }

    getuser() {
        this.socket.on('user', function(err, res) {
            if (err) {
              console.log(err);
            } else {
              console.log(res);
            }
        });
    }
*/
  }

