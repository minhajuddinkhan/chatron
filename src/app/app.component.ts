import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  chatList = [
    {
      name: "Ali",
      "message": `beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam `,
      image : "http://i2.wp.com/you-log.com/wp-content/uploads/2015/08/People-Avatar-Set-Circular-09.png?resize=250%2C250"
    },
    {
      name: "Asad",
      "message": `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit`,
      image : "https://secure.gravatar.com/avatar/75cf74b306bc41c46786f6d03daf6e55?r=g&d=https://avatar-cdn.atlassian.com/default/96&s=128"
    },
    {
      name: "Hassan",
      "message": `veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia`,

      image : "https://cdn.zapier.com/storage/services/5a67ba06cd2c1c87baadac29145f18a2.128x128.png"
    },
    {
      name: "Furqan",
      "message": `ipsa quaeipsa quaeipsa quaeipsa quaeipsa quaeipsa quae`,

      image : "http://i2.wp.com/you-log.com/wp-content/uploads/2015/08/People-Avatar-Set-Circular-09.png?resize=250%2C250"
    }
  ]
}
