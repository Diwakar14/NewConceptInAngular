import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelDataService {

  constructor(private httpClient: HttpClient) { }

  getAllModel(httpParam: HttpParams) {
    return this.httpClient.get(environment.imageServer + 'get', { params: httpParam });
  }
}
