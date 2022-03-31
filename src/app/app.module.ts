import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ShowroomComponent } from './showroom/showroom.component';



@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    GalleryComponent,
    ShowroomComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
