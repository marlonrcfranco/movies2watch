import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmcartazPage } from './emcartaz.page';

describe('EmcartazPage', () => {
  let component: EmcartazPage;
  let fixture: ComponentFixture<EmcartazPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmcartazPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmcartazPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
