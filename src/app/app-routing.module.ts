import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {AppComponent} from "./app.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ShowroomComponent} from "./showroom/showroom.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes= [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'upload', component:  FileUploadComponent},
  { path: 'showroom', component:  ShowroomComponent},
  { path: '', component:  HomeComponent},
  { path: '**', component:  HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



