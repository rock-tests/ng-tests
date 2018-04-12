import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TestsComponent } from './tests.component';

const testsRoutes: Routes = [
  {
    path: 'tests',
    component: TestsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(testsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestsRoutingModule { }
