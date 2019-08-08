import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { PopoverController } from '@ionic/angular';

@Component({
	selector: 'app-popover-settings',
	templateUrl: './popover-settings.component.html',
	styleUrls: ['./popover-settings.component.scss'],
})
export class PopoverSettingsComponent implements OnInit {

	constructor(public loginService: LoginService, public popoverController: PopoverController) { }
	ngOnInit() { }

	logout() {
		this.popoverController.dismiss();
		this.loginService.signOut();
	}
}
