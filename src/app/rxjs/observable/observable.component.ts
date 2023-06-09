import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable, Subscribable, Subscription } from 'rxjs';
export class Post {
  constructor(
    public userId: any,
    public id: any,
    public title: any,
    public body: any
  ) {}
}
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit, OnDestroy {
  post: Post[] = [];
  promisePost: Post[] = [];
  subscription!: Subscription;
  timerConsolSubscriptiopn!: Subscription;
  timerBrowserSubscriptiopn!: Subscription;
  timer: number[] = [];
  constructor(private dataService: DataService) {}
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    // this.getPostByO();
    this.checkMemoryLeak();
  }
  getPostByP() {
    this.dataService.getPostByPromise().then((res) => {
      this.promisePost.push(res);
    });
  }
  getPostByO() {
    this.subscription = this.dataService.getPostsByObser().subscribe((res) => {
      this.post.push(res);
    });
  }
  checkMemoryLeak() {
    const newObservable = new Observable<number>((observer) => {
      let i = 0;
      let interval = setInterval(() => {
        console.log('Interval executing');
        observer.next(i++);
      }, 1000);
      return () => {
        console.log('called when observable is unsubscribed');
        clearInterval(interval);
      };
    });
    this.timerConsolSubscriptiopn = newObservable.subscribe((data) => {
      console.log(new Date().toLocaleTimeString() + ' ' + data);
    });

    this.timerBrowserSubscriptiopn = newObservable.subscribe((data) => {
      this.timer.push(data);
    });
  }
  cancelTimer() {
    console.log('cancel the observable');
    this.timerBrowserSubscriptiopn.unsubscribe();
    this.timerConsolSubscriptiopn.unsubscribe();
  }
}
