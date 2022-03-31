import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {PictureService} from "../picture.service";
import {Picture} from "../../picture";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  error: string | undefined;
  dragAreaClass: string | undefined;
  draggedFiles: any;
  url: any;
  picture: Picture;

  constructor(private http: HttpClient, private pictureService: PictureService) {
    this.picture = new class implements Picture {
      fileData: ArrayBuffer;
      fileDateTime: Date;
      fileMimeTyp: string;
      fileName: string;
      filePath: string;
      fileSize: number;
      height: number;
      id: number;
      width: number;
    }
  }

  onFileChange(event: any) {
    let files: FileList = event.target.files;
    console.log(files);
    this.saveFiles(files);
  }
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  async saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      let read = new FileReader();
      this.error = "";
      this.draggedFiles = files;
      let file: File = this.draggedFiles[0];
      let buffer = file.arrayBuffer();
      this.picture.fileName= file.name;
      this.picture.fileDateTime = new Date(file.lastModified);
      this.picture.fileMimeTyp= file.type;
      this.picture.fileSize = file.size;
      this.picture.filePath= '../assets/img/'+this.picture.fileName;
      this.picture.height=1080;
      this.picture.width=1920;
      this.pictureService.addPicture(this.picture).subscribe(
        (response: Picture) => {
          console.log(response.fileName);
        },
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
      );
      console.log(this.picture);
    }
  }

/*
alternative upload
  onChange(event: any) {
    var reader = new FileReader();


    this.picture.fileName= event.target.files[0].name;
    this.picture.fileDateTime = new Date(event.target.files[0].lastModified);
    this.picture.fileMimeTyp= event.target.files[0].type;
    this.picture.fileSize = event.target.files[0].size;
    this.picture.filePath= '../assets/img/'+this.picture.fileName;
    this.picture.height=1080;
    this.picture.width=1920;

    reader.onload = (event: any) => {

      //this.picture.fileData = event.target.result;
      this.pictureService.addPicture(this.picture).subscribe(
        (response: Picture) => {
          console.log(response.fileName);
        },
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
      );
      //##########################

      this.url = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);

  }
*/





}
