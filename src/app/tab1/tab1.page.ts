import { Component, ViewChild } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { NavController, PopoverController, AlertController } from '@ionic/angular';
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PopoverSettingsComponent } from '../popover-settings/popover-settings.component';
import { LoginService } from '../services/login.service';



@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
	images: any;
	images2: any;
	user: any;
	myId = null;
	avatar: any;

	constructor(private googlePlus: GooglePlus,
		public navCtrl: NavController,
		private http: HttpClient,
		private socket: Socket,
		private storage: Storage,
		private loginService: LoginService,
		private activatedRoute: ActivatedRoute,
		public popoverController: PopoverController,
		public alertCtrl: AlertController) { }

	@ViewChild('myNav') nav: NavController;

	ionViewDidEnter() {

		// this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
		this.storage.get('google_user').then(data => {
			console.log(data);
			this.avatar = data.avatar;
			this.user = data;
			this.socket.emit('getImgs', this.user);
			this.socket.on('images', res => {
				this.images2 = res;
				console.log(res);
				res.forEach(img => {
					console.log(img);
					this.images = img.image;
				});
			});
		});
	}
	// Settings window on profile page
	async presentPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverSettingsComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}
	/*remove(img: any) {
		this.socket.emit('deleteImg', img._id);
		let indexToSplice = -1;
		console.log('Removing img');
		console.log(this.images2.length);
		for (let index = 0; index < this.images2.length; index++) {
			const image = this.images2[index];
			if (image._id === img._id) {
				indexToSplice = index;
			}
		}
		if (indexToSplice > -1) {
			this.images2.splice(indexToSplice, 1);
		}
		console.log(this.images2.length);
	}*/
	async removeConfirm (img: any) {
		console.log(img);
		const alert = await this.alertCtrl.create({
		  message: 'Do you want to delete this image?',
		  buttons: [
			{
			  text: 'No',
			  role: 'cancel',
			  handler: () => {
				console.log('no clicked');

			  }
			},
			{
			  text: 'Yes',
			  handler: () => {
				this.socket.emit('deleteImg', img._id);
				let indexToSplice = -1;
				console.log('Removing img');
				console.log(this.images2.length);
				for (let index = 0; index < this.images2.length; index++) {
					const image = this.images2[index];
					if (image._id === img._id) {
						indexToSplice = index;
					}
				}
				if (indexToSplice > -1) {
					this.images2.splice(indexToSplice, 1);
				}
				console.log('Yes clicked');
			  }
			}
		  ]
		});
		return await alert.present();
	  }
}
