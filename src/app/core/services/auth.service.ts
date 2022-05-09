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

  RegisterUser(data: any) {
    return this.http.post<any>("signup", data)
    // return of("sucessssssss")
  }
}
