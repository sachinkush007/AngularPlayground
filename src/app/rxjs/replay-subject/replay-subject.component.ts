import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../service/subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  currentTemperature!:number
 chatMessages:string[]=[];
 newMessage!:string
 subscription!:any;
 recieveMessage:string[]=[]
  constructor(private subjectService:SubjectService) { }
 
  ngOnInit(): void {
    this.subjectService.behavorSubject.subscribe(data=>{
      this.currentTemperature=data;
    })

    this.subjectService.chatMessagesSubject.subscribe(msg=>{
      this.chatMessages.push(msg);
    })
  }
sendMessage(){
  this.subjectService.chatMessagesSubject.next(this.newMessage)
  this.newMessage='';
}
recieveduser(){
if(this.subscription){
  this.subscription.unsubscribe();
  this.subscription = null;
}
else{
  this.subscription=this.subjectService.chatMessagesSubject.subscribe(msg=>{
    this.recieveMessage.push(msg);
  })
}
}
}
