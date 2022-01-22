import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class RespuestaService {

  url: string = 'http://localhost:8083';

  constructor(private http: HttpClient) { }

  getRespuestas(): Observable<Respuesta[]>{
    return this.http.get<Respuesta[]>(this.url+'/respuesta');
  }
}
