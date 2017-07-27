import { Component } from '@angular/core';

@Component({
  selector: 'conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css', '../app/app.component.css']
})
export class conversationComponent{

  chat = {
    name: 'Ali',
    message: 'Kahan ho?',
    image : "https://secure.gravatar.com/avatar/75cf74b306bc41c46786f6d03daf6e55?r=g&d=https://avatar-cdn.atlassian.com/default/96&s=128"

  }
}
