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
export interface Citas {
  fecha: string;
  mascota: string;
  doctor: string;
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
  displayedColumns: string[] = ["fecha", "mascota", "doctor"];
  dataSource: Citas[] = [
    {
      fecha: "2024-05-26",
      mascota: "Max",
      doctor: "Dr. Rodríguez"
    },
    {
      fecha: "2024-05-28",
      mascota: "Luna",
      doctor: "Dr. Pérez"
    },
    {
      fecha: "2024-06-02",
      mascota: "Bobby",
      doctor: "Dr. Gómez"
    },
    {
      fecha: "2024-06-05",
      mascota: "Lucky",
      doctor: "Dr. Sánchez"},
    {
      fecha: "2024-06-10",
      mascota: "Rocky",
      doctor: "Dra. Martínez"
    },
    {
      fecha: "2024-06-15",
      mascota: "Coco",
      doctor: "Dr. Fernández"
    },
    {
      fecha: "2024-06-20",
      mascota: "Bella",
      doctor: "Dra. García"
    },
    {
      fecha: "2024-06-25",
      mascota: "Max",
      doctor: "Dr. López"
    },
    {
      fecha: "2024-07-01",
      mascota: "Charlie",
      doctor: "Dra. Ramírez"
    },
    {
      fecha: "2024-07-05",
      mascota: "Simba",
      doctor: "Dr. González"
    },
    {
      fecha: "2024-07-10",
      mascota: "Luna",
      doctor: "Dra. Soto"
    }

  ];//aca se guardan los datos solicitados del servidor
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
