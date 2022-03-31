import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {AppComponent} from "./app.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ShowroomComponent} from "./showroom/showroom.component";

const routes: Routes= [
  { path: 'gallery', component: GalleryComponent },
  { path: 'upload', component:  FileUploadComponent},
  { path: 'showroom', component:  ShowroomComponent},
  { path: '', component:  GalleryComponent},
  { path: '**', component:  GalleryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



