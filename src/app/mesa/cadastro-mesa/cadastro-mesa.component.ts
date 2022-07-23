import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MesaService } from '../mesa.service';

@Component({
  selector: 'app-cadastro-mesa',
  templateUrl: './cadastro-mesa.component.html',
  styleUrls: ['./cadastro-mesa.component.css']
})
export class CadastroMesaComponent implements OnInit {

  mesaDeSom!: FormGroup;

  constructor(public dialogRef: MatDialogRef<CadastroMesaComponent>, private mesaService: MesaService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerControls();
  }

  registerControls() {
    this.mesaDeSom = new FormGroup({
      nome: new FormControl(`Mesa ${new Date().toLocaleDateString()}`, []),
      qtdCanais: new FormControl(1, [Validators.required, Validators.min(1)])
    });
  }

  cancelar() {
    this.dialogRef.close();
  }

  salvar() {
    if(!this.mesaDeSom.valid) {
      this._snackBar.open('Formulário inválido!', 'OK', {
        duration: 3000
      });
      return;
    }

    this.mesaService.saveMesaDeSom(this.mesaDeSom.value);
    this.dialogRef.close();
  }


}
