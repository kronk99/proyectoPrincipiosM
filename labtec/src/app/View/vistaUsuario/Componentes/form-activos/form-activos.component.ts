import {Component, Inject} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {NgIf} from "@angular/common";
import {ComunicationService} from "../../../../Servicios/comunication.service";
import {FormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-form-activos',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatButtonToggleGroup,
    MatButtonToggle,
    NgIf,
    FormsModule,
    MatSelect,
    MatOption,
    MatLabel
  ],
  templateUrl: './form-activos.component.html',
  styleUrl: './form-activos.component.css'
})
export class FormActivosComponent {
  profesorSeleccionado: boolean = false; // Propiedad para almacenar el valor seleccionado del toggle
  banderaparaenviar:boolean=false;
  nombreTextbox="";
  fechaTextbox="";
  citaTextbox="";
  contrasenaTextbox ="";
  nombreMascota="";
  //metodo para manejar el tipo
  onToggleChange(event: MatButtonToggleChange) {
    this.profesorSeleccionado = event.value === "true";
    this.banderaparaenviar = true;
  }
   currentDate= new Date(); //para establecer la fecha
  constructor(private servicio:ComunicationService,@Inject(MAT_DIALOG_DATA) public data: any) {}//forma de pasar
  //datos entre el componente de vista activos y el componente form-activos o
  //el formulario de registros.
  //data es el nombre de la data que se pasa , se usa en el html
  //metodo para realizar las reservas a la base de datos:
  realizarReserva(){

  }




}
