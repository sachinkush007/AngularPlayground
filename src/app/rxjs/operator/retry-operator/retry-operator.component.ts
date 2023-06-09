import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-retry-operator',
  templateUrl: './retry-operator.component.html',
  styleUrls: ['./retry-operator.component.css']
})
export class RetryOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getRetry();
  }

  getRetry(){
    const source$ = interval(1000);

// Example with error
const errorExample$ = source$.pipe(
  // Simulate an error after 3 emissions
  retry(2),
  // Simulate an error by throwing an error
  map(value => {
    if (value === 3) {
      throw new Error('Error occurred');
    }
    return value;
  })
);

// Subscribe to the errorExample$ Observable
errorExample$.subscribe(
  value => console.log('Value:', value),
  error => console.error('Error:', error)
);
  }
}
