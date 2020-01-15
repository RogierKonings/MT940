import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageWrapperComponent } from 'src/app/components/layout/page-wrapper/page-wrapper.component';

describe('PageWrapperComponent', () => {
  let component: PageWrapperComponent;
  let fixture: ComponentFixture<PageWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageWrapperComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
