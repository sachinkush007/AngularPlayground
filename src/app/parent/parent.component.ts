import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {
@ViewChild(ChildComponent) childComponent!:ChildComponent;
  constructor() { }

  ngAfterViewInit(): void {
    this.childComponent.parentData='Inital Parent data';
    console.log('ngAfterViewInit');
  }

  ngOnInit(): void {
  }
changeChildData(){
  this.childComponent.parentData='Update Parent Data';
}
}
