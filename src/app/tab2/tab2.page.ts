import { Component } from '@angular/core';
import { MapsService } from '../services/map.service';
import { map, filter } from 'rxjs/operators';
import { Socket } from 'ng-socket-io';
import { SocketService } from '../services/socket.service';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss'],
})

export class Tab2Page {
	lat = '';
	lng = '';
	markers: any = [];
	location: Object;
	likedMarkerss: any = [];

	constructor(private maps: MapsService,
		private socket: Socket,
		public socketService: SocketService,
	) { }

	// Executed when this tab is displayed
	ionViewDidEnter() {
		this.showMap();
		this.socket.emit('getLikesMap');
		this.socket.on('likedImgs', (likedImgs) => {
			this.likedMarkerss = likedImgs;
		});
		this.showAll();
	}
	// Show only liked images on the map
	showLikes() {
		// emitting socket to server to fetch likes
		this.socket.emit('getLikesMap');
		// fetching socket from db with likes
		this.socket.on('likedImgs', (likedImgs) => {
			const likedMarkers = [];
			// Looping through the fetched likes and comparing them to all the markers in order to set the right icon
			likedImgs.forEach(likedImg => {
				this.markers.forEach(marker => {
					if (likedImg.imageId === marker._id) {
						marker.icon = 'star';
						likedMarkers.push(marker);
					}
				});
			});
			this.markers = likedMarkers;
		});
	}
	// Show all images on the map, also looping through the likes to display the right icon
	showAll() {
		const newMarkers = [];
		this.socket.emit('getImgsMap');
		this.socket.on('imagesMap', (images) => {
			this.socket.emit('getLikesMap');
			this.socket.on('likedImgs', (likes) => {
				for (let i = 0; i < images.length; i++) {
					let isLiked = false;
					for (let j = 0; j < likes.length; j++) {
						const like = likes[j];
						if (like.imageId === images[i]._id) {
							isLiked = true;
							break;
						}
					}
					if (isLiked) {
						images[i].icon = 'star';
						newMarkers.push(images[i]);
					} else {
						images[i].icon = 'star-outline';
						newMarkers.push(images[i]);
					}
					// this.markers.push(image[i]);
				}
				this.markers = newMarkers;
			});
		});
	}
	showMap() {
		this.maps.getLocation().subscribe(data => {
			console.log(data);
			this.lat = data.latitude;
			this.lng = data.longitude;
		});
	}
	// Like an image, called to "star" an image in our app
	star(mark: any) {
		if (mark.icon === 'star') {
			console.log('already liked, disliked img');
			this.socket.emit('disStar', mark._id);
			mark.icon = 'star-outline';
		} else if (mark.icon === 'star-outline') {
			console.log('liked image');
			this.socket.emit('star', mark._id);
			mark.icon = 'star';
		}
	}
}
