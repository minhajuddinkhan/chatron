import { Component } from '@angular/core';

@Component({
  selector: 'conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css', '../app/app.component.css']
})
export class conversationComponent{


  senderImg: string;
  receiverImg: string;
  chat: any;

  constructor() {
    this.senderImg = "https://secure.gravatar.com/avatar/75cf74b306bc41c46786f6d03daf6e55?r=g&d=https://avatar-cdn.atlassian.com/default/96&s=128";
    this.receiverImg = "http://i2.wp.com/you-log.com/wp-content/uploads/2015/08/People-Avatar-Set-Circular-09.png?resize=250%2C250";
    this.chat = {
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
  }



  pushMessage(message: string) {

    this.chat.messages.push({ type: 'receiver', msg: message})
    var objDiv = document.getElementById("chat-area");
    objDiv.scrollTop = objDiv.scrollHeight;

  }
}
