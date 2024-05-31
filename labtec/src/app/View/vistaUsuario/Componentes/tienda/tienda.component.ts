import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {NgForOf} from "@angular/common";
export interface Mascota { //creo una interfaz que se puede exportar,
  //con esto leo todos los elementos que existen en
  id: string; //el id
  name: string;//el nombre
  description: string; //la descripción
  imageURL: string; // Propiedad para almacenar la URL de la imagen del equipo

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
    {
      "id": "1",
      "name": "Juguete para perros",
      "description": "Juguete resistente y seguro para perros de todas las edades.",
      "imageURL": "https://th.bing.com/th/id/OIP.iafqe5GGLx1jy7fdLjGULwHaGf?rs=1&pid=ImgDetMain"
    },

    {
      "id": "2",
      "name": "Alimento para gatos",
      "description": "Comida balanceada y nutritiva para gatos adultos.",
      "imageURL": "https://th.bing.com/th/id/R.7d750567924baf8bd06bcd4a7fdcf74f?rik=SVfItrWpu%2f%2fikw&pid=ImgRaw&r=0"
    },

    {
      "id": "3",
      "name": "Snacks para pájaros",
      "description": "Snacks deliciosos para pájaros, ideales como premio o para adiestramiento.",
      "imageURL": "https://th.bing.com/th/id/OIP.vOWCEe_GqpYM7nGGnt8kWQHaGf?rs=1&pid=ImgDetMain"
    },

    {
      "id": "4",
      "name": "Comedero automático para peces",
      "description": "Comedero automático programable para alimentar a los peces en horarios específicos.",
      "imageURL": "https://th.bing.com/th/id/R.3e55d4e821268dff272051ae4d01e696?rik=NMKmoCD7gHeeRg&pid=ImgRaw&r=0"
    }
  ];
}
