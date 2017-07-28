import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css', '../app/app.component.css']
})
export class conversationComponent{


  senderImg = "https://secure.gravatar.com/avatar/75cf74b306bc41c46786f6d03daf6e55?r=g&d=https://avatar-cdn.atlassian.com/default/96&s=128";
  recieverImg = "http://i2.wp.com/you-log.com/wp-content/uploads/2015/08/People-Avatar-Set-Circular-09.png?resize=250%2C250";

  chat = {
    name: 'Ali',
    messages: [
      {
        type: 'sender',
        msg: 'Kaise ho?'
      },
      {
        type: 'receiver',
        msg: 'Alhamdullillah!'
      }
    ],
  }


  scrollToBottom(id){
    var div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
  }

  pushMessage(message: string) {

    this.chat.messages.push({ type: 'receiver', msg: message})
    this.scrollToBottom('chat-box')

  }
}
