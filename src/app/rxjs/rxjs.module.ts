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
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { PipesComponent } from './pipes/pipes.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ReverseStringPipe } from './custom-pipe/reverse-string.pipe';
import { PureImpurePipe } from './custom-pipe/pure-impure.pipe';
import { OperatorComponent } from './operator/operator.component';
import { TapOperatorComponent } from './operator/tap-operator/tap-operator.component';
import { CombineLatestOperatorComponent } from './operator/combine-latest-operator/combine-latest-operator.component';
import { ShareReplayOperatorComponent } from './operator/share-replay-operator/share-replay-operator.component';
import { RetryOperatorComponent } from './operator/retry-operator/retry-operator.component';


@NgModule({
  declarations: [
    ObservableComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    BuiltInPipesComponent,
    PipesComponent,
    AsyncPipeComponent,
    ReverseStringPipe,
    PureImpurePipe,
    OperatorComponent,
    TapOperatorComponent,
    CombineLatestOperatorComponent,
    ShareReplayOperatorComponent,
    RetryOperatorComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class RxjsModule { }
