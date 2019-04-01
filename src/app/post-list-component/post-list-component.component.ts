import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

  onLove(){
    console.log("I love this post !");
    this.post.loveIts+=1;
  }

  onDontLove(){
    console.log("I don't love this post !");
    this.post.loveIts-=1;
  }

}
