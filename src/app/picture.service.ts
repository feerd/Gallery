import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Picture} from "../picture";
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPictures(): Observable<Picture[]>{
    return this.http.get<Picture[]>(`${this.apiServerUrl}/picture/all`)
  }

  public addPicture(picture : Picture): Observable<Picture>{
    return this.http.post<Picture>(`${this.apiServerUrl}/picture/add`, picture)
  }

  public updatePicture(picture : Picture): Observable<Picture>{
    return this.http.put<Picture>(`${this.apiServerUrl}/picture/update`, picture)
  }

  public deletePicture(pictureId : Number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/picture/delete/${pictureId}`)
  }
}
