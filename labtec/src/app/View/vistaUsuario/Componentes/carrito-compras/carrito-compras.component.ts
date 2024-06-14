import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatList, MatListItem} from "@angular/material/list";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatLine} from "@angular/material/core";
import {MatButton} from "@angular/material/button";
import {ComunicationService} from "../../../../Servicios/comunication.service";
export interface carrito{
  name:string
  precio:number;
  cantidad:number;
}
@Component({
  selector: 'app-carrito-compras',
  standalone: true,
  imports: [
    MatDialogContent,
    MatList,
    MatListItem,
    MatRadioGroup,
    MatRadioButton,
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    NgForOf,
    MatLine,
    MatButton
  ],
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.css'
})
export class CarritoComprasComponent {
  tipoPago: any;



  constructor(private servicio:ComunicationService,@Inject(MAT_DIALOG_DATA) public data: { carrito: carrito[] }) { }
  comprar(): void{

  }
}

