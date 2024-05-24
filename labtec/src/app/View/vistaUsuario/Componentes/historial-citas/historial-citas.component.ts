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
export interface Registros {
  fecha: string;
  ingreso: string;
  salida: string;
  horasTrabajadas: number
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
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
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource: PeriodicElement[] = [];//aca se guardan los datos solicitados del servidor
  //titulos para las columnas;
  //displayedColumns: string[] = ['Fecha', 'Ingreso','Salida','Horas_trabajadas'];
  mostrarForm(indice:number ,  nombre:string ,correito:string){//la i es de un valor para identificar cual boton fue presionado
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '450px';
    dialogConfig.data = {
      idActivo: indice,
      nombreActivo: nombre,
      correo:correito
      //aca falta pasarle la contraseña para que se mande el id del operador.
    };
    //this.matDialog.open(FormDevolucionComponent,dialogConfig);
    //la linea anterior abre un dialog, que por contenido tendrá lo que haya
    //en formActivosComponent. y el ancho del dialog
  }
  //constructor de la clase
  constructor(private servicio:ComunicationService,private matDialog:MatDialog) { //se inyecta matdialog al constructor
  }
  //metodo que solicita los activos disponibles del usuario en la bd
  mostrarActivos(){
    //este get se le manda el username o id del operador para traer los datos de la
    //bd
    this.servicio.getaprobarSolicitud("hola").subscribe(
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
}
