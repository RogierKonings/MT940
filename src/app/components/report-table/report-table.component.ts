import { Component, Input } from '@angular/core';

import { ValidationField } from 'src/app/models/validation.model';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent {

  @Input() report: Array<ValidationField>;

}
