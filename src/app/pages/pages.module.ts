import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';

import { ExportsPageComponent } from 'src/app/pages/exports-page/exports-page.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [ExportsPageComponent],
  providers: [],
  exports: [ExportsPageComponent]
})
export class PagesModule {}
