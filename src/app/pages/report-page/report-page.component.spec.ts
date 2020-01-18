import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReportPageComponent } from 'src/app/pages/report-page/report-page.component';
import { ReportService } from 'src/app/core/services/report.service';

class ReportServiceMock {
  createReport() {}
}

describe('ReportPageComponent', () => {
  let component: ReportPageComponent;
  let fixture: ComponentFixture<ReportPageComponent>;
  let reportService: ReportService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReportPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ReportService, useClass: ReportServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    reportService = TestBed.get(ReportService);
  });

  describe('when opening a file', () => {
    it('should call the create report method from the report service', () => {
      const blob = new Blob([''], { type: 'text/csv'});
      const fakeFile = blob as File;

      spyOn(reportService, 'createReport').and.returnValue({});
      component.openFile(fakeFile);
      expect(reportService.createReport).toHaveBeenCalled();
    });
  });

});
