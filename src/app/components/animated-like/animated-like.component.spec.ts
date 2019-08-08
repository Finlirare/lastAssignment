import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedLikePage } from './animated-like.page';

describe('AnimatedLikePage', () => {
  let component: AnimatedLikePage;
  let fixture: ComponentFixture<AnimatedLikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedLikePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedLikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
