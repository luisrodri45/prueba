import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private _http:HttpClient) { }
  public hacerAlgo(signo:string,dia:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        "content-type": "application/json",
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '5cdc033dc4msh7df58d30e42980ep129e2ajsn52e98bfb5a2d '
      })
    }
    /* const body = new HttpParams()
    .set('sign',signo)
    .set('day',dia); */
    const body = {
     
    }
    return this._http.post("https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign="+signo+"&day="+dia,body, httpOption);
  }
}
