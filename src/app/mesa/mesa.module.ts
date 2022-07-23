import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaMesaComponent } from './lista-mesa/lista-mesa.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CadastroMesaComponent } from './cadastro-mesa/cadastro-mesa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaMesaComponent,
    CadastroMesaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MesaModule { }
