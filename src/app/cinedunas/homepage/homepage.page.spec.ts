import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagePage } from './homepage.page';

describe('HomepagePage', () => {
  let component: HomepagePage;
  let fixture: ComponentFixture<HomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
