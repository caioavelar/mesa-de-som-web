import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MesaDeSom } from 'src/app/interfaces/mesa';
import { CadastroMesaComponent } from '../cadastro-mesa/cadastro-mesa.component';
import { MesaService } from '../mesa.service';

@Component({
  selector: 'app-lista-mesa',
  templateUrl: './lista-mesa.component.html',
  styleUrls: ['./lista-mesa.component.css']
})
export class ListaMesaComponent implements OnInit {

  mesasDeSom: Array<MesaDeSom> = [];
  constructor(private mesaService: MesaService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getMesasDeSom()
  }

  getMesasDeSom() {
    this.mesasDeSom = this.mesaService.getMesasDeSom();
  }

  mostraDialogCadastro() {
    const dialogRef = this.dialog.open(CadastroMesaComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.getMesasDeSom();
    })
  }

  deletarMesaDeSom(id: string, name: string) {
    this.mesaService.deleteMesaDeSom(id);
    this._snackBar.open(`Mesa de som "${name}" deletada`, 'OK', {
      duration: 3000
    });
    this.getMesasDeSom();
  }

  editarMesaDeSom(id: string) {
    this._snackBar.open(`Em breve será possível editar mesas de som!`, 'OK', {
      duration: 3000
    });
  }
}
