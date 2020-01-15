import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageWrapperComponent } from 'src/app/components/layout/page-wrapper/page-wrapper.component';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { BodyComponent } from 'src/app/components/layout/body/body.component';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';
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
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    FileUploadComponent
  ]
})
export class SharedModule {}
