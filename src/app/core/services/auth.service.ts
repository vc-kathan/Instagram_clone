import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  loginUser(user: any) {
    // return this.http.get("user");
    return of("sucessssssss")
  }

  registerUser(data: any) {
    return this.http.post<any>("signup", data)
    // return of("sucessssssss")
  }

  forgotpassword(data: any) {
    // return this.http.post<any>("forgotpassword", data)
    return of("sucessssssss")
  }
  resetpassword(pass: any) {
    // return this.http.post<any>("forgotpassword", pass)
    return of("sucessssssss")
  }
}
