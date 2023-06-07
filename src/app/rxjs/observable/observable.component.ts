import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Subscribable, Subscription } from 'rxjs';
export class Post{
  constructor(
 public userId:any,
 public id:any,
 public title:any,
public body:any,){}
}
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit,OnDestroy {
  post:Post[]=[]; 
  promisePost:Post[]=[];
  subscription!:Subscription;
  constructor(private dataService:DataService) { }
  ngOnDestroy(): void {
   if(this.subscription){
    this.subscription.unsubscribe();
   }
  }
  
  ngOnInit(): void {
    // this.getPostByO();
  }
getPostByP(){
  this.dataService.getPostByPromise().then(res=>{
    this.promisePost.push(res);
  })
}
getPostByO(){
  this.subscription=this.dataService.getPostsByObser().subscribe(res=>{
    this.post.push(res);
  })
}
}
