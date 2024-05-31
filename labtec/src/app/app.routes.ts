import { Routes } from '@angular/router';
import {SidenavComponent} from "./View/vistaUsuario/Componentes/sidenav/sidenav.component";
import {LoginComponent} from "./View/vistaUsuario/Componentes/login/login.component";
import {RegisterComponent} from "./View/vistaUsuario/Componentes/register/register.component";
import {MascotasUsuarioComponent} from "./View/vistaUsuario/Componentes/mascotas-usuario/mascotas-usuario.component";
import {HistorialCitasComponent} from "./View/vistaUsuario/Componentes/historial-citas/historial-citas.component";
import {ExpedienteMedicoComponent} from "./View/vistaUsuario/Componentes/expediente-medico/expediente-medico.component";
import {
  ProductosFarmaciaComponent
} from "./View/vistaUsuario/Componentes/productos-farmacia/productos-farmacia.component";
import {HistorialComprasComponent} from "./View/vistaUsuario/Componentes/historial-compras/historial-compras.component";
import {TiendaComponent} from "./View/vistaUsuario/Componentes/tienda/tienda.component";

export const routes: Routes = [
  {path: 'sidenav', component: SidenavComponent,
    children:[{path: 'hcitas',component: HistorialCitasComponent},
      {path: 'mascotasUsuario',component:MascotasUsuarioComponent},
      {path:'expMedico',component: ExpedienteMedicoComponent},
      {path:'prodFarma',component: ProductosFarmaciaComponent},
      {path:'facturas',component: HistorialComprasComponent}
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'tienda', component: TiendaComponent},

  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  //{path: 'vistaActivos',component: VistaActivosComponent}
  //children:[{path: 'tipoplato',component: TipoplatoComponent},
  // {path:'menu',component:MenuComponent},
  //{path:'estadisticas',component: EstadisticasComponent}]}
];
