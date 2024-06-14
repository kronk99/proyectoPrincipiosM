import { Component } from '@angular/core';

//const Readline = require('@serialport/parser-readline');

declare global {
  interface Navigator {
    // @ts-ignore
    serial?: Serial;
  }
}
interface Boton {
  numero: number;
  mensaje: string;
}
@Component({
  selector: 'app-arduino',
  standalone: true,
  imports: [],
  templateUrl: './arduino.component.html',
  styleUrl: './arduino.component.css'
})
export class ArduinoComponent {

  botones: Boton[] = [
    { numero: 1, mensaje: 'Estoy hambriento' },
    { numero: 2, mensaje: 'Necesito salir a pasear' },
    { numero: 3, mensaje: 'Tengo sed' },
    { numero: 4, mensaje: 'Estoy aburrido' },
    { numero: 5, mensaje: 'Quiero jugar' },
    { numero: 6, mensaje: 'Me duele algo' },
    { numero: 7, mensaje: 'Estoy feliz' },
    { numero: 8, mensaje: 'Tengo miedo' },
    { numero: 9, mensaje: 'Estoy cansado' },
    { numero: 10, mensaje: 'Necesito atención' }
  ];

  botonSeleccionado: number | null = null;
  mensajeMascota: string | null = null; // Variable para almacenar el mensaje de la mascota
  port: any; // Variable para almacenar la conexión serial
  parser: any; // Variable para almacenar el parser
  constructor() {
    // Inicialmente el mensaje del h1 será genérico
    this.mensajeMascota = 'Control de Comunicación de la Mascota';
  }
  async conectarArduino(): Promise<void> {
    try {
      const port = await navigator.serial.requestPort();
      await port.open({ baudrate: 9600 });

      const reader = port.readable.getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const data = new TextDecoder().decode(value);
        const boton = this.botones.find(b => b.numero === +data);
        if (boton) {
          this.mensajeMascota = boton.mensaje;
        }
      }
    } catch (error) {
      console.error('Error al conectar con Arduino:', error);
    }
  }
  botonPresionado(numeroBoton: number): void {
    this.botonSeleccionado = numeroBoton;
  }

}
