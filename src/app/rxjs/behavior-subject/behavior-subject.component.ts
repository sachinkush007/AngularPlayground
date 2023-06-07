import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css'],
})
export class BehaviorSubjectComponent implements OnInit {
  currentTemperature!:number
  constructor(private subjectService:SubjectService) {}

  ngOnInit(): void {
    this.subjectService.behavorSubject.subscribe(data=>{
     this.currentTemperature=data;
    })
  }

 
  updateTemp(newtemp: number) {
    this.subjectService.behavorSubject.next(newtemp);
  }
}
