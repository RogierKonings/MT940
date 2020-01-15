import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BodyComponent } from 'src/app/components/layout/body/body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
