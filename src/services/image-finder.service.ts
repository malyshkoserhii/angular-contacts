import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IResponse {
  total: number;
  totalHits: number;
  hits: IHits[];
}

export interface IHits {
  comments: number;
  downloads: number;
  favorites: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}

@Injectable({ providedIn: 'root' })
export class ImageFinderService {
  baseUrl: string = 'https://pixabay.com/api';
  key: string = '18518367-60788b25c9bdd8e2c754a390a';

  constructor(private http: HttpClient) {}

  getImages(query: string): Observable<IResponse> {
    const params = new HttpParams().set('key', this.key).set('q', query);
    return this.http.get<IResponse>(this.baseUrl, {
      params,
    });
  }
}
