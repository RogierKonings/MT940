import { Component } from '@angular/core';

import { ReportService } from 'src/app/core/services/report.service';

import { ValidationField } from 'src/app/models/validation.model';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent {

  public MT940report: Array<ValidationField>;

  constructor(
    private reportService: ReportService
  ) {}

  public async openFile(file: File) {
    this.MT940report = await this.reportService.createReport(file);
  }
}
