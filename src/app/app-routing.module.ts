import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './rxjs/observable/observable.component';
import { SubjectComponent } from './rxjs/subject/subject.component';
import { BehaviorSubject } from 'rxjs';
import { BehaviorSubjectComponent } from './rxjs/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './rxjs/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './rxjs/async-subject/async-subject.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './rxjs/pipes/pipes.component';
import { BuiltInPipesComponent } from './rxjs/built-in-pipes/built-in-pipes.component';
import { AsyncPipeComponent } from './rxjs/async-pipe/async-pipe.component';
import { OperatorComponent } from './rxjs/operator/operator.component';
import { TapOperatorComponent } from './rxjs/operator/tap-operator/tap-operator.component';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import { ShareReplayOperatorComponent } from './rxjs/operator/share-replay-operator/share-replay-operator.component';
import { CombineLatestOperatorComponent } from './rxjs/operator/combine-latest-operator/combine-latest-operator.component';
import { RetryOperatorComponent } from './rxjs/operator/retry-operator/retry-operator.component';

const routes: Routes = [
  {path:'',component:ObservableComponent},
  {path:'subject',component:SubjectComponent,
      children:[
        {path:'behavior',component:BehaviorSubjectComponent},
        {path:'replay',component:ReplaySubjectComponent},
        {path:'async',component:AsyncSubjectComponent},
        
      ]
},
{path:'sharing',component:ParentComponent},
{path:'pipes',component:PipesComponent,
children:[
  {path:'built-pipes',component:BuiltInPipesComponent},
  {path:'async-pipe',component:AsyncPipeComponent}
]
},
{path:'operator',component:OperatorComponent,
children:[
  {path:'tap',component:TapOperatorComponent},
  {path:'combine',component:CombineLatestOperatorComponent},
  {path:'share-replay',component:ShareReplayOperatorComponent},
  {path:'retry',component:RetryOperatorComponent}
]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
