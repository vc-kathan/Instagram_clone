import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  Email = "";
  Password = ""
  loading = false;
  resetpassword = false;
  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  forgotPassword() {
    this._auth.forgotpassword(this.Email).subscribe({
      next: (res) => {
        console.log(res);
        this.resetpassword = true
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  resetPassword() {
    this._auth.resetpassword(this.Password).subscribe({
      next: (res) => {
        console.log(res);
      }, error: (err) => {
        console.log(err);
      }
    })
  }
}
