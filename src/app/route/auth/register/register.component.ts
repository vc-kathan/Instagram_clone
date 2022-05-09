import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // data = {
  //   name: 'kathan',
  //   email: 'kathanpatel0000@gmail.com',
  //   password: '123456123456',
  //   age: 22,
  //   phoneNumber: '7778835898',
  // }
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
    // this.register(this.data)
    this.registerForm = this.formBuilder.group({
      name: ['kathan', Validators.required],
      email: ['kathan@gmail.com', [Validators.required, Validators.email]],
      age: ['23', Validators.required],
      file: [''],
      fileSource: [''],
      phoneNumber: ['7778835898', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['123456789', [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['1234567897', [Validators.required]]
    });
  }
  // register(data: any) {

  //   this._auth.RegisterUser(data).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     }, error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }

  Registeruser() {
    // this.loading = true
    const formData = new FormData();
    formData.append('file', this.registerForm.get('fileSource')?.value);
    formData.append('name', this.registerForm.get('name')?.value);
    formData.append('email', this.registerForm.get('email')?.value);
    formData.append('age', this.registerForm.get('age')?.value);
    formData.append('phoneNumber', this.registerForm.get('phoneNumber')?.value);
    formData.append('password', this.registerForm.get('password')?.value)

    console.log(this.registerForm.value);
    console.log(formData);

    formData.forEach((val, key) => {
      console.log(key, "=>", val);
    })
    // this._auth.RegisterUser(formData).subscribe({
    //   next: (res) => {
    //     console.log(res);
    // this.loading = false;
    //   }, error: (err) => {
    //     console.log(err);
    // this.loading = false;
    //   }
    // })


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
}
