import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

interface loginUser {
  email: string,
  password: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  Email = "";
  Password = "";
  loading = false;
  constructor(
    private _auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  loginuser(data: loginUser) {
    this.loading = true;
    this._auth.loginUser(data).subscribe({
      next: (res) => {
        console.log(res);
        this.loading = false
      }, error: (err) => {
        console.log(err);
        this.loading = false
      }
    })
  }
}
