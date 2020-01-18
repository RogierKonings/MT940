import { Component, Input } from '@angular/core';

import { MT940 } from 'src/app/models/mt940.model';
import { ValidationField } from 'src/app/models/validation.model';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent {

  @Input() report: Array<ValidationField>;

}
