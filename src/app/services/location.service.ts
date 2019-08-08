import { Injectable } from '@angular/core';
import { Capacitor, Plugins, GeolocationPosition } from '@capacitor/core';
import { Observable, of, from as fromPromise } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  public coordinates$: Observable<GeolocationPosition>;
  public defaultPos: {latitude: 13, longitude: 37};


  //Getting the users position
  public async getCurrentPosition(): Promise<any>{
    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('err');
      return of(new Error('Err'));
    }
    const POSITION = Plugins.Geolocation.getCurrentPosition()
    //Catching capacitor error
    .catch(err => {
      console.log('error', err);
      return new Error(err.message || 'customized message');
    });
    this.coordinates$ = fromPromise(POSITION).pipe(
      switchMap((data: any) => of (data.coords)),
      tap(data => console.log(data))
    );
    return POSITION;
  }
}
