import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {ComunicationService} from "../../../../Servicios/comunication.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatIcon,
    MatInput,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //constructor de la clase, se le inyecta los comunication services
  constructor(private router: Router,private servicio:ComunicationService) {
  }
  //variables para los input o textbox del componente , aca se reciben
  //lo que el usuario ingrese
  cedulaTextbox= "";//check
  carnetTextbox=""; //check
  nombreTextbox= ""; //check
  apellidoTextbox=""; //check
  edadTextbox= "";//check
  fenacimientoTextbox="";//check
  correoTextbox=""; //check
  passwordTextbox= "";//check
  registrarUsuario() {
    //json de datos de registro para enviar al backend
    const datosaRegistrar ={//datos para el backend de login
      Cedula:this.cedulaTextbox,//int
      Carnet:this.carnetTextbox,//int
      Nombre:this.nombreTextbox,
      Apellido:this.apellidoTextbox,
      Edad:parseInt(this.edadTextbox),//edad es int
      FechaNacimiento:this.fenacimientoTextbox,//string por el momento
      Correo:this.correoTextbox,//string
      Contraseña:this.passwordTextbox,//ESTE PUEDE DAR PROBLEMAS
      Aprobado:false
    }
    //metodo que llama al comunication service y envia los datos:
    this.servicio.registrarse(datosaRegistrar).subscribe(
      response => {
        console.log('respuesta del servidor:', response);
      },
      error => {
        console.error('Error al enviar datos al servidor:', error);
      }
    );
  }
  volverLogin(){
    this.router.navigate(['login']);
  }


}
