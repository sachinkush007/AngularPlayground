import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { RouterModule } from '@angular/router';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { FormsModule } from '@angular/forms';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';


@NgModule({
  declarations: [
    ObservableComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class RxjsModule { }
