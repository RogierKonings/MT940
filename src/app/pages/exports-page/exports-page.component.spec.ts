import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExportsPageComponent } from 'src/app/pages/exports-page/exports-page.component';

describe('PageWrapperComponent', () => {
  let component: ExportsPageComponent;
  let fixture: ComponentFixture<ExportsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExportsPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
