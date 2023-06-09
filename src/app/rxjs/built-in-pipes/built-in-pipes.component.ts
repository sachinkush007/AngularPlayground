import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {
 
  today:Date= new Date();
  price: number = 10.99;
  pi: number = 3.14159;
  percentage: number = 0.0075;
  
  constructor() { }

  ngOnInit(): void {
  }

}
