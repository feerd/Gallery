import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('txt_id') txt_id1 : ElementRef;

  str : String;
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

  public updatePicture(id : any, name : any, time : any,mime : any,size : any, path : any){
    let picture : Picture = new class implements Picture {
      fileDateTime: Date;
      fileMimeTyp: string;
      fileName: string;
      filePath: string;
      fileSize: number;
      id: number;
    };

    picture.id = id.value;
    picture.fileName = name.value;
    picture.fileDateTime = time.value;
    picture.fileMimeTyp = mime.value;
    picture.fileSize = size.value;
    picture.filePath = path.value;

    this.pictureService.updatePicture(picture).subscribe(
      (response: Picture) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )

  }

  public deletePicture(id : any){

    this.pictureService.deletePicture(id.value).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )

  }

}
