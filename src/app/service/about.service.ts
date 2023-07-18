import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AboutService {
  link:string="http://localhost:5016/api/About";
  constructor(private http: HttpClient) { }

  get_data(res:any){
    return this.http.post(this.link,res);
  }
}
