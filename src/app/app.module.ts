import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { Storage } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { combineAll } from 'rxjs/operators';
import { AuthGuard } from './guards/auth.guard';
import { PopoverSettingsComponent } from './popover-settings/popover-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

const firebaseConfig = {
	apiKey: 'AIzaSyBnhDz92Et4bnB12j8zGqvqLl4KzEq7YHY',
	authDomain: 'lastassig.firebaseapp.com',
	databaseURL: 'https://lastassig.firebaseio.com',
	projectId: 'lastassig',
	storageBucket: 'lastassig.appspot.com',
	messagingSenderId: '265104966702',
	// appID: '1:265104966702:android:4a8c47a9d9f2b95f'
};

@NgModule({
	declarations: [AppComponent, PopoverSettingsComponent],
	entryComponents: [PopoverSettingsComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	imports: [BrowserModule,
		SocketIoModule.forRoot(config),
		BrowserAnimationsModule,
		IonicModule.forRoot(), AppRoutingModule,
		IonicStorageModule.forRoot(), HttpClientModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AgmCoreModule.forRoot({ apiKey: 'AIzaSyCf5imGc4PIY7TyUWgsjHPH-lXhcgZbQ1o' }),
		AgmJsMarkerClustererModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		AuthGuard

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
