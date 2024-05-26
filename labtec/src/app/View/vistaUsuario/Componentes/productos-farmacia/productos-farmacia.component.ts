import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
export interface producto { //creo una interfaz que se puede exportar,//con esto leo todos los elementos que existen en
  id: string; //el id
  name: string;//el nombre
  description: string; //la descripción
  imageURL: string; // Propiedad para almacenar la URL de la imagen del equipo
}

@Component({
  selector: 'app-productos-farmacia',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatToolbar,
    MatButton,
    NgForOf
  ],
  templateUrl: './productos-farmacia.component.html',
  styleUrl: './productos-farmacia.component.css'
})
export class ProductosFarmaciaComponent {
  productosRecibidos: producto[] = [
    {
      id: "1",
      name: "Advantix",
      description: "Antiparasitario externo para perros",
      imageURL: "https://th.bing.com/th/id/OIP.j1199WmuIjk1ZrhU47k9AAHaHa?rs=1&pid=ImgDetMain"
    },
    {
      id: "2",
      name: "Frontline",
      description: "Antiparasitario externo para gatos",
      imageURL: "https://static.petnautasloja.com.br/public/nunesagropecuaria/imagens/produtos/biotril-512mg-9127.jpg"
    },
    {
      id: "3",
      name: "Metacam",
      description: "Antiinflamatorio para perros y gatos",
      imageURL: "https://th.bing.com/th/id/OIP.xDCSX1Pe5fKP2rgUGbzBNgHaHa?rs=1&pid=ImgDetMain"
    },
    {
      id: "4",
      name: "Consequin",
      description: "Analgésico y antiinflamatorio para perros",
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/81tiamL8ziL._AC_SL1500_.jpg"
    },
    {
      id: "5",
      name: "Vermibal",
      description: "Antiparasitario externo e interno para perros y gatos",
      imageURL: "https://th.bing.com/th/id/R.6308a55dfd0d8cb4356a27e84a6699cb?rik=hq0wbIYGU1u0Hg&pid=ImgRaw&r=0"
    }
  ]; //archivo que recibe una lista
  //de productos del cliente del backend
}
