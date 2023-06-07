import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './rxjs/observable/observable.component';
import { SubjectComponent } from './rxjs/subject/subject.component';
import { BehaviorSubject } from 'rxjs';
import { BehaviorSubjectComponent } from './rxjs/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './rxjs/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './rxjs/async-subject/async-subject.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'',component:ObservableComponent},
  {path:'subject',component:SubjectComponent,
      children:[
        {path:'behavior',component:BehaviorSubjectComponent},
        {path:'replay',component:ReplaySubjectComponent},
        {path:'async',component:AsyncSubjectComponent},
        
      ]
},
{path:'sharing',component:ParentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
