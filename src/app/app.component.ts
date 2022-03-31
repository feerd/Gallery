import {Component, OnInit} from '@angular/core';
import {Picture} from "../picture";
import {PictureService} from "./picture.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gallery';

  constructor(){}

  ngOnInit(): void {
  }

}
