import { Component, OnInit } from '@angular/core';
import {Picture} from "../../picture";
import {PictureService} from "../picture.service";
import {GalleryService} from "../gallery.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {

  id : number;
  picture : Picture;
  number: Number;
  pictures: Picture[];
  constructor(private pictureService: PictureService, private galleryService : GalleryService){}

  ngOnInit(): void {
    this.number = this.galleryService.getActivePicture();
     this.id = this.number.valueOf();
    this.getPictures();
  }

  public getPictures(): void{
    this.pictures = [];
    this.pictureService.getPictures().subscribe(
      (response: Picture[]) => {
        this.pictures = response;
        for (let i = 0; i < this.pictures.length; i++){
          if (this.pictures[i].id == this.id){
            this.picture = this.pictures[i];
          }
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );

  }

  public savePicture(){
    let txt_id = document.getElementById("txt_id");
    let txt_name = document.getElementById("txt_name");
    let txt_time = document.getElementById("txt_time");
    let txt_mime = document.getElementById("txt_mime");
    let txt_size = document.getElementById("txt_size");
    let txt_path = document.getElementById("txt_path");


  }

}
