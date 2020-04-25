import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {Routes, RouterModule} from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostService } from './services/post.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

const appRoutes : Routes = [
  {path: "posts", component : PostsComponent
  },
  {path: "post-list-item", component : PostListItemComponent
  },
  {path: "new-post", component : NewPostComponent
  },
  {path: "", component : PostsComponent
  },
  {path: "**", redirectTo : "posts"
  },

]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NewPostComponent,
    PostListItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
