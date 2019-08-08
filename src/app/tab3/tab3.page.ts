import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { Socket } from 'ng-socket-io';

import { LocationService } from '../services/location.service';
const { Camera } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
	image: string;
	savedImg: string;
	userId: any;
	long: any;
	lat: any;
	constructor(private socket: Socket, private locationService: LocationService) {}

//Using capacitor to take a photo
	async takePhoto(){
		const result = await Camera.getPhoto({
			quality: 90,
			resultType: CameraResultType.Base64,
			source: CameraSource.Camera
		});
		this.image = result.base64Data;
	}

	saveImage(){
		this.locationService.getCurrentPosition().then(result => {
			console.log(result);
			console.log(result.coords.longitude);
			console.log(result.coords.latitude);
			this.savedImg = this.image;
			const img = {long: result.coords.longitude, lat: result.coords.latitude, image: this.savedImg}
			console.log(this.savedImg);
			this.socket.emit('image', img);	
		})
	
	}
	ngOnInit() {
		this.takePhoto();		
	}
}
