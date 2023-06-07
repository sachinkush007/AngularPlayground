import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  totalPrice: number = 0;

  constructor(private asyncService:SubjectService) { }

  ngOnInit(): void {
    this.addTocart('Product 1', 10);
    this.addTocart('Product 2', 20);
    this.addTocart('Product 3', 15);

  }
addTocart(name:string,price:number){
  this.totalPrice+=price;
this.asyncService.asyncSubject.next(this.totalPrice);
this.asyncService.asyncSubject.complete();
}
}
