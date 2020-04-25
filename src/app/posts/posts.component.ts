import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import {Subscription} from 'rxjs';
import {Post} from '../models/Post.model';
 
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit,OnDestroy {

  posts : Post[];
  postsSubscription : Subscription;

  constructor(private postService : PostService) { }

  

  ngOnInit(){
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts:Post[])=>{
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }
  
  onTest(i:number){
    console.log(i);
  }
  onTrash(i:number){
    this.postService.removePost(i);
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}
