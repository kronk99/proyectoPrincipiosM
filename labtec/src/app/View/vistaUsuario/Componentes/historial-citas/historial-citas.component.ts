import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatToolbar} from "@angular/material/toolbar";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ComunicationService} from "../../../../Servicios/comunication.service";
import {FormActivosComponent} from "../form-activos/form-activos.component";
export interface Citas {
  fecha: string;
  mascota: string;
  doctor: string;
  estado:string;
}

@Component({
  selector: 'app-historial-citas',
  standalone: true,
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatTable,
    MatToolbar,
    MatHeaderCellDef
  ],
  templateUrl: './historial-citas.component.html',
  styleUrl: './historial-citas.component.css'
})
export class HistorialCitasComponent {
  displayedColumns: string[] = ["fecha", "mascota", "doctor" ,"estado", "cancelar"];
  dataSource: Citas[] = [

  ];//aca se guardan los datos solicitados del servidor
  //titulos para las columnas;
  //displayedColumns: string[] = ['Fecha', 'Ingreso','Salida','Horas_trabajadas'];

  solicitarCita(){//la i es de un valor para identificar cual boton fue presionado
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '450px';

    this.matDialog.open(FormActivosComponent,dialogConfig);
    //la linea anterior abre un dialog, que por contenido tendrá lo que haya
    //en formActivosComponent. y el ancho del dialog
  }
  //constructor de la clase
  constructor(private servicio:ComunicationService,private matDialog:MatDialog) { //se inyecta matdialog al constructor
  }

  //metodo que solicita los activos disponibles del usuario en la bd
  mostrarCitas(){
    //este get se le manda el username o id del operador para traer los datos de la
    //bd
    this.servicio.getCitas(this.servicio.getUsuarioId()).subscribe(
      response => {
        console.log('Datos enviados al servidor:', response);

        this.dataSource = response; //iguala el datasource a la respuesta
        //recibida del servidor.
      },
      error => {
        console.error('Error al enviar datos al servidor:', error);
        // Maneja el error adecuadamente aquí
      }
    );
  }
  cancelarCita(fechaa:string,mascotaa:string,doctoor:string,estadoo:string){
    const datatoSend1 = {
      usuario: this.servicio.getUsuarioId(),
      fecha: fechaa,
      mascota: mascotaa,
      doctor:doctoor,
      estado:estadoo
    }
    this.servicio.deleteCita(datatoSend1).subscribe(
      response => {
        console.log('Datos enviados al servidor:', response);
        console.error('Se recibe:', response);
        //recibida del servidor.
      },
      error => {
        console.error('Error al enviar datos al servidor:', error);
        // Maneja el error adecuadamente aquí
      }
    );

  }
}
