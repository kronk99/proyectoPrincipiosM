import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {NgForOf} from "@angular/common";
import {ComunicationService} from "../../../../Servicios/comunication.service";
import {MatDialog} from "@angular/material/dialog";
import {CarritoComprasComponent} from "../carrito-compras/carrito-compras.component";
import {carrito, producto} from "../productos-farmacia/productos-farmacia.component";
export interface Mascota { //creo una interfaz que se puede exportar,
  //con esto leo todos los elementos que existen en
  id: string; //el id
  name: string;//el nombre
  description: string; //la descripción
  imageURL: string; // Propiedad para almacenar la URL de la imagen del equipo
  precio:number;
}
@Component({
  selector: 'app-tienda',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardContent,
        MatToolbar,
        NgForOf
    ],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  mascotasRecibidas: Mascota[] = [

  ];
  constructor(private servicio:ComunicationService,public dialog: MatDialog) {
  }
  mostrarFarmacia(valor: number){
    this.servicio.getTienda(valor).subscribe(
      response => {
        console.log('Datos enviados al servidor:', response);

        this.mascotasRecibidas = response; //iguala el datasource a la respuesta
        //recibida del servidor.
      },
      error => {
        console.error('Error al enviar datos al servidor:', error);
        // Maneja el error adecuadamente aquí
      }
    );
  }
  carritoC: carrito[] = [];
  agregarAlCarrito(productos: Mascota) {
    const itemEnCarrito = this.carritoC.find(item => item.name === productos.name);
    if (itemEnCarrito) {
      itemEnCarrito.cantidad++;
    } else {
      this.carritoC.push({ name: productos.name, precio: productos.precio, cantidad: 1 });
    }
  }
  openCarritoModal(): void {
    const dialogRef = this.dialog.open(CarritoComprasComponent, {
      width: '600px',
      height:'500px',
      data: { carrito: this.carritoC }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Se realizó la compra con tipo de pago:', result.tipoPago);
        // Aquí puedes agregar la lógica para procesar la compra con el tipo de pago seleccionado
      }
    });
  }
}
