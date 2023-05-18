import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel, LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService) { }
  
  loginForm: FormGroup = this.fb.group({
    email: ["eve.holt@reqres.in", [Validators.required, Validators.email]],
    password: ["cityslicka", [
      Validators.required, 
      Validators.minLength(8)]]
     // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-={}:"<>?,./;'[\]\\]).{8,}$/)],
  });

  submit() {
    console.log('LoginForm Value: ',  this.loginForm.value);
    const param = this.loginForm.value as LoginModel;
    this.loginService.login(param).subscribe({
      error: (err) => {
        console.log("LoginPageComponent.submit() err: ", err);
      }
    }); // next ile dataya ihtiyaç yok login başarılı olursa yönlendirme servis tarafında yapılacak. localstorage'a token kaydedilecek.
  }

  

}
