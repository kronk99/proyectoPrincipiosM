import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormActivosComponent} from "../form-activos/form-activos.component";
import {ComunicationService} from "../../../../Servicios/comunication.service";
import {NgForOf} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
export interface Mascota { //creo una interfaz que se puede exportar,
                          //con esto leo todos los elementos que existen en
  id: string; //el id
  name: string;//el nombre
  description: string; //la descripción
  imageURL: string; // Propiedad para almacenar la URL de la imagen del equipo

}
@Component({
  selector: 'app-mascotas-usuario',
  standalone: true,
  imports: [
    NgForOf,
    MatCardContent,
    MatToolbar,
    MatButton,
    MatCard
  ],
  templateUrl: './mascotas-usuario.component.html',
  styleUrl: './mascotas-usuario.component.css'
})
export class MascotasUsuarioComponent {
  mascotasRecibidas: Mascota[] = [
    {
      id: "1",
      name: "Max",
      description: "Perro mestizo, color marrón, macho",
      imageURL: "https://th.bing.com/th/id/OIP.V7yDY7NwmmrQYiyzSm7B_QHaFj?rs=1&pid=ImgDetMain",
    },
    {
      id: "2",
      name: "Luna",
      description: "Gata siamesa, color blanco y marrón, hembra",
      imageURL: "https://th.bing.com/th/id/R.b7f9bea91b857d4a55e12f1248f4359f?rik=Qi5rYX%2feXR3AOg&pid=ImgRaw&r=0",

    },
    {
      id: "3",
      name: "Bobby",
      description: "Perro labrador, color dorado, macho",
      imageURL: "https://th.bing.com/th/id/OIP.YqfKncTfykxWhxddGHTXHQHaE9?rs=1&pid=ImgDetMain",

    },
    {
      id: "4",
      name: "Lucky",
      description: "Caballo negro, de trabajo",
      imageURL: "https://i.pinimg.com/originals/23/6a/4d/236a4dcea25a9f7c1a9dc043acc60d54.jpg",

    }
  ]; //archivo que recibe una lista
  //de activos del cliente
  //logica para recibir cosas del servidor
  //variables necesarias para la funcionalidad
  //mostrarModal: boolean = true; //variable para mostrar el forms de llenado.
  botonPresionado:number=0;  //se inicializa en 0, me indica
  id = "";
  nombre = "";
  //que boton fue presionado para que en el form aparezca el nombre y tipo de elemento.

  /*mostrarForm(indice:number){//la i es de un valor para identificar cual boton fue presionado
    //y asi mostrar el form
    this.botonPresionado =indice; //de esta forma guardo cual boton
    //de todos fue presionado y puedo buscar con una funcion buscar activo, los
    //datos del elemento presionado
    //el codigo de abajo busca en el array de elementos el array especificado
    //de su boton correspondiente
    if (this.botonPresionado >= 0 && this.botonPresionado < this.activosRecibidos.length) {
      const activoSeleccionado = this.activosRecibidos[this.botonPresionado];
      this.id= activoSeleccionado.id;
      this.nombre =activoSeleccionado.cedulaa;//id del profesor
      // Aquí puedes realizar cualquier acción necesaria con el activo seleccionado
    } else {
      console.log('Índice fuera de rango');
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '450px';
    console.log('la cedula asociada es:',this.nombre);
    dialogConfig.data = {
      idActivo: this.id,
      nombreActivo: this.nombre,
    };
    this.matDialog.open(FormActivosComponent,dialogConfig);
    //la linea anterior abre un dialog, que por contenido tendrá lo que haya
    //en formActivosComponent. y el ancho del dialog

  }*/

  //Constructor de la clase, se le inyecta el dialog, y el comunicationService.
  //private matDialog:MatDialog
  constructor( private servicio:ComunicationService) {}//se inyecta el servicio
  mostrarMascotas(){//metodo que solicita del servidor todos los activos disponibles
    //para reservar.
    this.servicio.getMascotas(this.servicio.getUsuarioId()).subscribe(
      response => {
        console.log('Datos enviados al servidor:', response);

        this.mascotasRecibidas = response;
      },
      error => {
        console.error('Error al enviar datos al servidor:', error);
        // Maneja el error adecuadamente aquí
      }
    );
  }
  //matdialog para poder abrir matdialogs en este componente
// Para cerrar el modal

//metodo ngOninit , ejecuta al inicio

}
