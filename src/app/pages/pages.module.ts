import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';

import { ReportPageComponent } from 'src/app/pages/report-page/report-page.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [ReportPageComponent],
  providers: [],
  exports: [ReportPageComponent]
})
export class PagesModule {}
