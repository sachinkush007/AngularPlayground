import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-share-replay-operator',
  templateUrl: './share-replay-operator.component.html',
  styleUrls: ['./share-replay-operator.component.css']
})
export class ShareReplayOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getShareReplay();
  }

  getShareReplay(){
    const source$ = interval(1000);

// Apply the shareReplay operator to share the execution and emitted values
const shared$ = source$.pipe(shareReplay(3));

// Subscribe to the shared$ Observable
shared$.subscribe(value => console.log('Subscriber 1:', value));

// Delay the second subscription
setTimeout(() => {
  shared$.subscribe(value => console.log('Subscriber 2:', value));
}, 3000);
  }

}
