import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiServerUrl = environment.apiBaseUrl;
  activeNumber : Number;

  constructor(private http: HttpClient) {
    this.activeNumber = 0;
  }

  public getActivePicture(): Number {
    return this.activeNumber;
  }

  public setActiveNumber(number : Number){
    this.activeNumber = number;
  }

}
