import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemasPage } from './cinemas.page';

describe('CinemasPage', () => {
  let component: CinemasPage;
  let fixture: ComponentFixture<CinemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CinemasPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
