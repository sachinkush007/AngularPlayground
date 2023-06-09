import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  country:any[]=['india','USA','Dubai','China']
  constructor() { }

  ngOnInit(): void {
  }
  add(value:any){
    this.country.push(value);
    console.log(this.country);
  }

}
