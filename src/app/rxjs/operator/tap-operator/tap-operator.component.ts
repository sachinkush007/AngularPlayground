import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.css']
})
export class TapOperatorComponent implements OnInit {
  value:number[]=[];
   source$ = of(1, 2, 3, 4, 5);

  constructor() { }

  ngOnInit(): void {
  //  this.tapExample$.subscribe(value => console.log('Final Value:', value));
  this.getTapOperator();
  }
  

// Example using the tap operator
getTapOperator(){
  const tapExample$=this.source$.pipe(
  tap(value => console.log('Original Value:', value)),
  tap(value => console.log('Doubled Value:', value * 2))
);
tapExample$.subscribe(value => console.log('Final Value:', value))
tapExample$.subscribe(value=>this.value.push(value));
  }
// Subscribe to the tapExample$ Observable

}
