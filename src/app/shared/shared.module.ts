import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as masterData from "./masterData.json";
import { ShareComponent } from './components/share/share.component'

@NgModule({
  declarations: [ShareComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [],
  entryComponents: [ShareComponent]
})
export class SharedModule { }
