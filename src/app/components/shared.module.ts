import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageWrapperComponent } from 'src/app/components/page-wrapper/page-wrapper.component';
import { FileUploadComponent } from 'src/app/components/file-upload/file-upload.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageWrapperComponent,
    FileUploadComponent
  ],
  providers: [],
  exports: [
    PageWrapperComponent,
    FileUploadComponent
  ]
})
export class SharedModule {}
