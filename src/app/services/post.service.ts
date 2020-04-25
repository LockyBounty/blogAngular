import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostService {
  posts : Post[]=[
    {
        id:1,
        title : "Premier post",
        content : "Il était une fois un petit chaperon rouge..." 
      },
      {
        id:2,
        title : "Deuxième post",
        content : `Lorem Ipsum is simply dummy text of the printing and typesetting industry 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `
      }
    ];

  postsSubject = new Subject<Post[]>();

  postReverse = this.posts.slice().reverse(); //<--pour inverser l'ordre en sortie

  emitPosts(){
    this.postsSubject.next(this.postReverse);
  }
  
  constructor() { }

  getPosts(){
    this.posts;
    this.emitPosts();
  }
  getSinglePost(id:number){

    this.emitPosts();
  }

  addPost(myPost){
    const newPost = {
      id : 0,
      title : myPost.title,
      content : myPost.content
    }
    newPost.id = this.posts[(this.posts.length -1)].id +1;
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(index : number){
    
    this.postReverse.splice(index,1) //<-- en fct des objets en sortie ici sur l'inversé
    this.emitPosts();
  }
}
