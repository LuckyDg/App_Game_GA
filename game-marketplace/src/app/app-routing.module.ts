import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegoListComponent } from './components/videojuegos/videojuego-list/videojuego-list.component';
import { VideojuegoDetailComponent } from './components/videojuegos/videojuego-detail/videojuego-detail.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent},
  { path: 'videojuegos', component: VideojuegoListComponent },
  { path: 'videojuegos/:id', component: VideojuegoDetailComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
