import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./inicio/inicio.module').then(n => n.InicioPageModule),
      },
      {
        path: 'recetas',
        loadChildren: () => import('./recetas/recetas.module').then(n => n.RecetasPageModule),
      },
      {
        path: 'sobre-nosotros',
        loadChildren: () => import('./sobre-nosotros/sobre-nosotros.module').then(n => n.SobreNosotrosPageModule),
      },
    ]
  },

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class HomePageRoutingModule {}
