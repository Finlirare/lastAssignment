import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  markers = [];
  imageMarker = '';
  imageM: any;

  constructor(private socket: Socket) { 
   
  }


    

  /*  console.log('getImages');
    let observable = new Observable(observer => {
      console.log('getImages2');
      this.socket.on('images', data => {
        console.log(data);
        console.log('data2');
        observer.next(data);
      });
    });
    return observable;
  */
  }
