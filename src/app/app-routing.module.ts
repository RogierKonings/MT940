import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportPageComponent } from 'src/app/pages/report-page/report-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/report'
  },
  {
    path: 'report',
    children: [
      {
        path: '',
        component: ReportPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
