import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';

import { TestsRoutingModule } from './tests-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestsRoutingModule
  ],
  declarations: [TestsComponent]
})
export class TestsModule { }
