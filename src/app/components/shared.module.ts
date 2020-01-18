import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageWrapperComponent } from 'src/app/components/layout/page-wrapper/page-wrapper.component';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';
import { FileUploadComponent } from 'src/app/components/file-upload/file-upload.component';
import { ReportTableComponent } from 'src/app/components/report-table/report-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageWrapperComponent,
    HeaderComponent,
    FooterComponent,
    FileUploadComponent,
    ReportTableComponent
  ],
  providers: [],
  exports: [
    PageWrapperComponent,
    HeaderComponent,
    FooterComponent,
    FileUploadComponent,
    ReportTableComponent
  ]
})
export class SharedModule {}
