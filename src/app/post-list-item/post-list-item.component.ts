import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit, OnDestroy {

  posts : Post[];
  postsSubscription : Subscription;

  likes : number=0;
  dislikes : number=0;


  constructor(private postService: PostService) { }



  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts:Post[])=>{
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  onLike(){
    this.likes++
  }
  onDislike(){
    this.dislikes++
  }
 

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}
