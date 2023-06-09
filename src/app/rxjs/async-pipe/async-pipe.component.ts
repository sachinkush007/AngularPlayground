import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  
  data$!:Observable<string>;
  countdown$!: Observable<number>;
  constructor() { }

  ngOnInit(): void {
    this.data$= this.getData();
    this.getCountdown();
  }

  getCountdown(){
   const initialCountdown=10
   const interval$=interval(1000);
   this.countdown$=interval$.pipe(
    map((tick)=>initialCountdown-tick),
    takeWhile((countdown)=>countdown>=0)
  )
  
  }

  getData():Observable<string>{
    return new Observable(observer=>{
      setInterval(()=>{
        observer.next('Data recieved');
        console.log(observer)
        observer.complete();
      },1000)
    });
    
  }
}
