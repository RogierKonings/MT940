import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportsPageComponent } from 'src/app/pages/exports-page/exports-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/exports'
  },
  {
    path: 'exports',
    children: [
      {
        path: '',
        component: ExportsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
