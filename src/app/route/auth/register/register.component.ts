import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/core/validator/confirmed.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  chide = true;
  loading = false;
  Email = "";
  Password = "";
  registerForm!: FormGroup;
  constructor(
    private _auth: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['kathan', Validators.required],
      email: ['kathanpatel5555@gmail.com', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,9}$/)]],
      age: ['23', Validators.required],
      file: [''],
      fileSource: [''],
      phoneNumber: ['7778835898', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['123456789', [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['123456789', [Validators.required]]
    }, {
      validator: ConfirmedValidator('password', 'ConfirmPassword')
    }
    );
  }

  Registeruser() {
    if (this.registerForm.valid) {
      this.loading = true
      const formData = new FormData();
      formData.append('profilePic', this.registerForm.get('fileSource')?.value);
      formData.append('name', this.registerForm.get('name')?.value);
      formData.append('email', this.registerForm.get('email')?.value);
      formData.append('age', this.registerForm.get('age')?.value);
      formData.append('phoneNumber', this.registerForm.get('phoneNumber')?.value);
      formData.append('password', this.registerForm.get('password')?.value)

      // console.log(this.registerForm.value);

      // formData.forEach((val, key) => {
      //   console.log(key, "=>", val);
      // })
      this._auth.RegisterUser(formData).subscribe({
        next: (res) => {
          console.log(res);
          this.loading = false;
        }, error: (err) => {
          console.log(err);
          this.loading = false;
        }
      })
    }
  }

  NumberValid(event: any) {
    // console.log(event);
    if ((event.key == "ArrowRight") || (event.key == "ArrowLeft") || (event.key == "Backspace") || (event.key == "Delete") || (event.key == "Tab") || (event.key == "Enter")) {

    }
    else if (+event.key || (+event.key == 0)) {
      // console.log("isnumber");
    } else {
      // console.log("notnumber");
      event.preventDefault();
    }

  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.patchValue({
        fileSource: file
      });
    }
  }

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get age() {
    return this.registerForm.get('age');
  }
  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get ConfirmPassword() {
    return this.registerForm.get('ConfirmPassword');
  }
  get f() {
    return this.registerForm.controls;
  }

}
