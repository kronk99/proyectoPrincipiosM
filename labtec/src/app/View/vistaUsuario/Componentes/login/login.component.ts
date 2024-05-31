import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../../../../Servicios/auth.service"
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router){}

  login(){
    let user = this.authService.login(
      this.form.value.username,
      this.form.value.password
    );

    if (!user) {
      alert("Usuario o contraseña invalida");
    } else
    {
      this.router.navigateByUrl("/admin");
    }
  }
  PasswordAlert(){
    alert("Para cambiar contraseña, dirigase a una sucursal para realizarlo")
  }
  tienda(){
    this.router.navigate(['tienda']);
  }

}
