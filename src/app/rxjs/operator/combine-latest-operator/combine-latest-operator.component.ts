import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest-operator',
  templateUrl: './combine-latest-operator.component.html',
  styleUrls: ['./combine-latest-operator.component.css']
})
export class CombineLatestOperatorComponent implements OnInit {

  combinedValues$!: [number, number][];
  // combinedValues$!:Observable<number>;
  constructor() { }

  ngOnInit(): void {
    this.getCombinelatest();
  }
getCombinelatest(){
  const source1$ = interval(1000);
const source2$ = interval(2000);

// Combine the latest values from source1$ and source2$
const combinedValues$ = combineLatest(source1$, source2$).pipe(
  map(([value1, value2]) => [value1, value2])

)
combinedValues$.subscribe(([value1, value2])=>{
  console.log('Combined:', value1, value2);
  this.combinedValues$.push([value1, value2])
})
// console.log('Combined:', value1, value2);
// Subscribe to the combined$ Observable
// combined$.subscribe(([value1, value2]) => {
//   console.log('Combined:', value1, value2);
//   this.combinedValues.push([value1, value2]);
// });
}
}
