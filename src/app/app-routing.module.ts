import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespuestaComponent } from './respuestas/respuesta/respuesta.component';

const routes: Routes = [
 { path: '', component: RespuestaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
