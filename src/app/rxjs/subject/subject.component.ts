import { Component, OnInit } from '@angular/core';
import { Observable, Subject, observable, of } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.observable();
    this.subjectAsObservable();
  }
//Unicasting
observable(){
  const Observable$=new Observable<number>(observer=>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.complete();
  });
  const observerA={
    next:(data:number)=>{
      console.log(data);
    },
    error:(error:any)=>{
      console.log(error);
    },
    complete:()=>{
      console.log("Obser A Complete")
    }
  }
  const observerB={
    next:(data:number)=>{
      console.log(data);
    },
    error:(error:any)=>{
      console.log(error);
    },
    complete:()=>{
      console.log("Obser B Complete")
    }
  }
  Observable$.subscribe(observerA);
  Observable$.subscribe(observerB);
}
//Multicasting
subjectAsObservable(){
  const Observable$= of(1,2,3,4,5);
  const subject=new Subject<number>();
  const observerA={
    next:(data:number)=>{
      console.log(data);
    },
    error:(error:any)=>{
      console.log(error);
    },
    complete:()=>{
      console.log("Sub A Complete")
    }
  }
  const observerB={
    next:(data:number)=>{
      console.log(data);
    },
    error:(error:any)=>{
      console.log(error);
    },
    complete:()=>{
      console.log("Sub B Complete")
    },
};
subject.subscribe(observerA);
subject.subscribe(observerB);
Observable$.subscribe(subject);
} 
}
