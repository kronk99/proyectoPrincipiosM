import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatToolbar} from "@angular/material/toolbar";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ComunicationService} from "../../../../Servicios/comunication.service";
export interface devolucion{

}

@Component({
  selector: 'app-expediente-medico',
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
    MatToolbar
  ],
  templateUrl: './expediente-medico.component.html',
  styleUrl: './expediente-medico.component.css'
})
export class ExpedienteMedicoComponent {

  displayedColumns: string[] = ['Id', 'Nombre','nombreRegistrado',
    'apellidoRegistrado','correo' , 'fechaSolicitud' ,'devolver'];
  dataSource: devolucion[] = [
  ];
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
