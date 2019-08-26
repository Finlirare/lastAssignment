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
  


}
