import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/Post.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm : FormGroup;
  posts : Post[];

  

  constructor(private formBuilder: FormBuilder,
    private postService : PostService,
    private router : Router) { }

  ngOnInit(){
    this.initForm();
    
  }

  initForm(){
    this.postForm =this.formBuilder.group({
      title_ : ['',Validators.required],
      content_ : ['', Validators.required]
    });
  }

  onSubmitForm(){
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['id_'],
      formValue['title_'],
      formValue['content_']
    );
    this.postService.addPost(newPost);
    this.router.navigate(['/posts'])
  }


  goBack(){
    this.router.navigate(['/posts']);
  }

}
