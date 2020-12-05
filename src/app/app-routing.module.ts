import { AuthGuard, LoginGuard } from './guards/login.guard';
import { LoginComponent } from './views/login/login.component';
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
    canActivate: [LoginGuard],
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
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
