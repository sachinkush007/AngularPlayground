import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';



@NgModule({
  declarations: [
    ObservableComponent,
    SubjectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RxjsModule { }
