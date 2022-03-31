import { Component, OnInit } from '@angular/core';
import {Picture} from "../../picture";
import {PictureService} from "../picture.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  title = 'gallery';
  public pictures: Picture[] | undefined;

  constructor(private pictureService: PictureService){}

  ngOnInit(): void {
    this.getPictures()
  }

  public getPictures(): void{
    this.pictures = [];
    this.pictureService.getPictures().subscribe(
      (response: Picture[]) => {
        this.pictures = response;
        console.log(this.pictures.length)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );

  }
}

