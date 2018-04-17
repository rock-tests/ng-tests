import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';

import { TestsRoutingModule } from './tests-routing.module';
import { TestBedComponent } from './test-bed/test-bed.component';

@NgModule({
  imports: [
    CommonModule,
    TestsRoutingModule
  ],
  declarations: [TestsComponent, TestBedComponent]
})
export class TestsModule { }
