import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  behavorSubject = new BehaviorSubject(25);
  chatMessagesSubject = new ReplaySubject<string>(3);
  asyncSubject=new AsyncSubject<number>();
  constructor() { }
}
