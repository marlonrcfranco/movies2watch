import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPage } from './lista.page';

describe('ListaPage', () => {
  let component: ListaPage;
  let fixture: ComponentFixture<ListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
