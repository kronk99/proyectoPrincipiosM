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
import {ComunicationService} from "../../../../Servicios/comunication.service";
export interface Citas {
  idFactura: string;
  nombre: string;
  precio: string;
  cantidad:string;
}
@Component({
  selector: 'app-historial-compras',
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
  templateUrl: './historial-compras.component.html',
  styleUrl: './historial-compras.component.css'
})
export class HistorialComprasComponent {
  displayedColumns: string[] = ["idFactura", "nombre", "precio" ,"cantidad"];
  dataSource: Citas[] = [
    {
      "idFactura": "123456",
      "nombre": "Consulta general",
      "precio": "50",
      "cantidad": "1"
    },
    {
      "idFactura": "789012",
      "nombre": "Vacuna antirrábica",
      "precio": "80",
      "cantidad": "2"
    },
    {
      "idFactura": "345678",
      "nombre": "Desparasitación",
      "precio": "30",
      "cantidad": "1"
    }

  ];
  constructor(private servicio:ComunicationService) {
  }
  obtenerFacturas(){//metodo que solicita del servidor todos los activos disponibles
    //para reservar.
    this.servicio.getFacturas(this.servicio.getUsuarioId()).subscribe(
      response => {
        console.log('Datos enviados al servidor:', response);

        this.dataSource = response;
      },
      error => {
        console.error('Error al enviar datos al servidor:', error);
        // Maneja el error adecuadamente aquí
      }
    );
  }
}
