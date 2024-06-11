import { Component } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../../../../Servicios/auth.service"
import {ComunicationService} from "../../../../Servicios/comunication.service";
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
  constructor(private servicio: ComunicationService,private authService: AuthService, private fb: FormBuilder, private router: Router){}

  login(){
    this.servicio.verifyLogin(this.form.value.username,this.form.value.password).subscribe(
      response => {
        console.log('Datos enviados al servidor:', response);
        this.servicio.setUsuarioId(this.form.value.username);
        this.router.navigateByUrl("/sidenav");
      },
      error => {
        console.error('Error al enviar datos al servidor:', error);
        alert("Usuario o contraseña invalida");

      }
    );
  }
  PasswordAlert(){
    alert("Para cambiar contraseña, dirigase a una sucursal para realizarlo")
  }
  tienda(){
    this.router.navigate(['tienda']);
  }

}
