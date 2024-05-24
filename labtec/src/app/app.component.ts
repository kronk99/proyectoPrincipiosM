import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SidenavComponent} from "./View/vistaUsuario/Componentes/sidenav/sidenav.component";
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import {LoginComponent} from "./View/vistaUsuario/Componentes/login/login.component";
import {MascotasUsuarioComponent} from "./View/vistaUsuario/Componentes/mascotas-usuario/mascotas-usuario.component";
import {RegisterComponent} from "./View/vistaUsuario/Componentes/register/register.component";


@Component({//decorador, describe el componente
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RouterLink, SidenavComponent ,LoginComponent
    ,HttpClientModule,MascotasUsuarioComponent,RegisterComponent], //otros modulos que necesito aca se ponen aca en estos importa
  ///y se colocan aca
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {//clase appcomponent
  title = 'MyPetCr';
}
