import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationExampleComponent } from './animation-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AnimationExampleComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ]
})
export class AnimationExampleModule { }
