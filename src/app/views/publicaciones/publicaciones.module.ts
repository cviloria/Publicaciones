import { CommentsComponent } from './components/comments/comments.component';
import { PostInputComponent } from './components/post-input/post-input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostCardComponent } from './components/post-card/post-card.component';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    PublicacionesComponent,
    PostInputComponent,
    PostCardComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule
  ]
})
export class PublicacionesModule { }
