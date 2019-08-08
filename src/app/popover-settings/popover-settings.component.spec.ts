import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverSettingsPage } from './popover-settings.page';

describe('PopoverSettingsPage', () => {
	let component: PopoverSettingsPage;
	let fixture: ComponentFixture<PopoverSettingsPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PopoverSettingsPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PopoverSettingsPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
