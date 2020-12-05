import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';


const routes: Routes = [{
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [{
        path: '',
        redirectTo: 'publicaciones',
        pathMatch: 'full',
      },
      {
        path: 'publicaciones',
        loadChildren: './views/publicaciones/publicaciones.module#PublicacionesModule'
      },

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
