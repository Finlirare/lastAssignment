import { Component } from '@angular/core';
import { LoadingController, AlertController, Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from '../services/login.service';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
//import { platform } from 'os';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { AuthGuard } from '../guards/auth.guard';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    constructor(
		public loginService: LoginService
	){}
  

login(){
	this.loginService.login();
}
  /*

  user: Observable<firebase.User>;

  constructor(
    public loadingController: LoadingController,
    private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform,
    public alertController: AlertController,
    public navCtrl: NavController,
    public storage: Storage,
    public loginService: LoginService,
    private router: Router
  ) { 
    this.user = this.afAuth.authState;
  }

  login(){
    if(!this.platform.is('cordova')){
      this.nativeGoogleLogin().then( as => {
       // this.router.navigate(['/tabs/tab1']);
        console.log("done");
      });
    } else {
      this.webGoogleLogin();
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
           
            return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)).then(() => {
              this.router.navigate(['/tabs/tab1']);
              return;
            });
        
          console.log(gplusUser);
        
          //return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
         
      } catch(err) {
              console.log(err);
        }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
    } catch (err) {
        console.log(err);
    }
  }

  signOut(){
      this.afAuth.auth.signOut().then(() => {
       // this.navCtrl.navigateForward('/tabs/tab1');
        //this.router.navigate(['/tabs/tab1']);
      });
      if(this.platform.is('cordova')){
          this.gplus.logout();
      }
  }

/*
  async doGoogleLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
    this.googlePlus.login({
      'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '705830739244-ap66lon7fne6c8v2p558m27i3oslth5a.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      })
      .then(user => {
        //save user data on the native storage
        this.storage.set('google_user', {
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl
        })
        .then(() => {
          this.navCtrl.navigateForward('/tabs/tab1');
          // this.router.navigate(["/user"]);
        }, (error) => {
          console.log(error);
        })
        loading.dismiss();
      }, err => {
        console.log(err);
        if(!this.platform.is('cordova')){
          this.presentAlert();
        }
        loading.dismiss();
      })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }

  async presentLoading(loading) {
      return await loading.present();
  }
  */


}
