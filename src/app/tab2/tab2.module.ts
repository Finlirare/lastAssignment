import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { HttpClientModule } from '@angular/common/http';
import { AnimatedLikeComponent } from '../components/animated-like/animated-like.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: Tab2Page }]), HttpClientModule,
		AgmCoreModule.forRoot({ apiKey: 'AIzaSyCf5imGc4PIY7TyUWgsjHPH-lXhcgZbQ1o' }),
		AgmJsMarkerClustererModule
	],
	declarations: [Tab2Page, AnimatedLikeComponent]
})
export class Tab2PageModule { }
