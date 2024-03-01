import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAdminData(){
    
    var url = environment.baseUrl + '/api/v1/admin'
    
    this.authService.addTokenToHeader();

    return this.http.get(url);
  }

  getManagerData(){
    
    var url = environment.baseUrl + '/api/v1/manager'
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+this.authService.getToken()
    });

    return this.http.get(url, { headers: headers });
  }
}
