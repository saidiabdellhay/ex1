import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my blog post app';
  postsArray = [
    new Post("Mon premier post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Post("Mon 2eme post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Post("Mon 3eme post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Post("Mon 4eme post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
  ];
}

export class Post {
  public title: string;
  public content: string;
  public loveIts: number;
  public created_at: Date;

  constructor(title: string, content: string){
    this.title = title;
    this.content = content;
    this.loveIts = 0;
    this.created_at = new Date();
  }
}
