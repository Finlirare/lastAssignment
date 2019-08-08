import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-animated-like',
  templateUrl: './animated-like.component.html',
  styleUrls: ['./animated-like.component.scss'],
  animations: [
    trigger('star', [
        state('unliked', style({
            color: '#000000',
            opacity: '0.5',
            transform: 'scale(1)'
        })),
        state('liked', style({
            color: '#8ACAFE',
            opacity: '1',
            transform: 'scale(1.1)'
        })),
        transition('unliked <=> liked', animate('100ms ease-out'))
    ])
  ]
})
export class AnimatedLikeComponent implements OnInit {

  public likeState: string = 'unliked';
  public iconName: string = 'outline-star';

  constructor(private socket: Socket) { }

  ngOnInit() {

  }

    toggleLikeState(){
		console.log(event);
		//var star = event.srcElement.nextElementSibling.src;
		//console.log(star);
        if (this.likeState == 'unliked'){
            this.likeState = 'liked';
            this.iconName = 'star';
			console.log('liked image');
           // this.socket.emit('star', star);
        } else {
            this.likeState = 'unliked';
            this.iconName = 'outline-star';
		//	this.socket.emit('disStar', star);
			console.log('already liked, disliked img');
        }
    }
}