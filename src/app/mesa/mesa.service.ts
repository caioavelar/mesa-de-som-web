import { Injectable } from '@angular/core';
import { MesaDeSom } from '../interfaces/mesa';
import { LocalStorageService } from '../local-storage.service';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private _savedListName = 'mesasDeSom';

  constructor(private localStorage: LocalStorageService) { }

  private updateSavedList(mesasDeSom: Array<MesaDeSom>) {
    if(!mesasDeSom)
      mesasDeSom = [];
      this.localStorage.set(this._savedListName, mesasDeSom);
  }

  getMesasDeSom(): Array<MesaDeSom> {
    let mesasDeSom = this.localStorage.get(this._savedListName);
    if(!mesasDeSom) {
      mesasDeSom = [];
    }
    return mesasDeSom;
  }

  saveMesaDeSom(mesaDeSom: MesaDeSom) {
    const id = uuid();
    mesaDeSom = {
      ...mesaDeSom,
      id,
      dataCriacao: new Date()
    }
    const mesasDeSom = this.getMesasDeSom();
    mesasDeSom.push(mesaDeSom);
    this.updateSavedList(mesasDeSom);
  }

  deleteMesaDeSom(id: string) {
    const mesasDeSom = this.getMesasDeSom();
    const updatedMesasDeSom: Array<MesaDeSom> = mesasDeSom.filter(mesa => mesa.id !== id);
    this.updateSavedList(updatedMesasDeSom);
  }
}
