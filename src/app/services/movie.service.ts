import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { error } from 'console';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

export interface OpdResult {
  id_berita: number;
  results: any[];
  judul: string;
  konten: string;
  created_date: string;
  img_url: string;
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient,private router: Router) { }
  
  getTopRateMovies(page = 1): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }

  getMoviesDetails(id: string){
    return this.http.get(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }

  getDaftarOpd(): Observable<any>{
    // Definisikan header
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'header-key': 'mgt-984tj&@*@0(#w&*(jJJJSJkjsKKSLDkz93948234irjt85tj985tjgr85jg7892302ofld4*!38^3728',
    });

    // Definisikan data yang akan dikirimkan
    const postData = {
      username: '848*(@()32((^^%%22%@^#@',
      password: '&&#@*&#^@^%&%$%@*992939hahaMMJHSEWDA',
      data: {
        'api-key': '!#$&*)(&^%#*((&&#@*&#^@^%&%$%@*992939hahaMMJHSEWDA'
      }
    };
    return this.http.post<any>("/api/default/index",postData, { headers });
  }
}
