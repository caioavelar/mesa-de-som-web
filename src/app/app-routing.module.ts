import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMesaComponent } from './mesa/lista-mesa/lista-mesa.component';

const routes: Routes = [
  {path: 'mesas', component: ListaMesaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
