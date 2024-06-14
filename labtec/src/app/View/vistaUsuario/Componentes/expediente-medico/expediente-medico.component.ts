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
export interface Expediente {
  fecha: string;
  mascota: string;
  doctor: string;
  medicamento: string;
  procedimiento:string;
  detalle:string;
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
    MatToolbar,
    MatHeaderCellDef
  ],
  templateUrl: './expediente-medico.component.html',
  styleUrl: './expediente-medico.component.css'
})
export class ExpedienteMedicoComponent {

  displayedColumns: string[] = ["fecha", "mascota", "doctor","medicamento","procedimiento","detalle"];
  dataSource: Expediente[] = [
    {
      fecha: "2024-05-26",
      mascota: "Max",
      doctor: "Dr. Rodríguez",
      medicamento: "Paracetamol",
      procedimiento: "Vacunación",
      detalle: "Vacuna contra la rabia"
    },
    {
      fecha: "2024-05-28",
      mascota: "Luna",
      doctor: "Dr. Pérez",
      medicamento: "Ivermectina",
      procedimiento: "Desparasitación",
      detalle: "Dosis única oral"
    },
    {
      fecha: "2024-06-02",
      mascota: "Bobby",
      doctor: "Dr. Gómez",
      medicamento: "Amoxicilina",
      procedimiento: "Tratamiento",
      detalle: "Dolor de estómago"
    },
    {
      fecha: "2024-06-05",
      mascota: "Lucky",
      doctor: "Dr. Sánchez",
      medicamento: "Prednisona",
      procedimiento: "Terapia",
      detalle: "Inflamación en la piel"
    }
  ]
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
  //metodo que solicita los expedientes disponibles del usuario en la bd
  mostrarExpediente(){
    //este get se le manda el username o id del operador para traer los datos de la
    //bd
    this.servicio.getExpediente(this.servicio.getUsuarioId()).subscribe(
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
