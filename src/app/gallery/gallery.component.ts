import { Component, OnInit } from '@angular/core';
import {Picture} from "../../picture";
import {PictureService} from "../picture.service";
import {HttpErrorResponse} from "@angular/common/http";
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  title = 'gallery';
  public pictures: Picture[] | undefined;

  constructor(private pictureService: PictureService, private galleryService : GalleryService){}

  ngOnInit(): void {
    this.getPictures()
  }

  public getPictures(): void{
    this.pictures = [];
    this.pictureService.getPictures().subscribe(
      (response: Picture[]) => {
        this.pictures = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );

  }

  public setActiveNumber(number : number){
    this.galleryService.setActiveNumber(number)
  }
}

