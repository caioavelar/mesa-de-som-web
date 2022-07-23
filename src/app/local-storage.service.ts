import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;
  private DOMAIN = '@mesa-de-som-app';

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any) {
    this.storage.setItem(this.transformKey(key), JSON.stringify(value));
  }

  get(key: string) {
    const item = this.storage.getItem(this.transformKey(key));
    if(!item) return null;
    return JSON.parse(item);
  }

  remove(key: string) {
    this.storage.removeItem(this.transformKey(key));
  }

  clear() {
    this.storage.clear();
  }

  transformKey(key: string) {
    return `${this.DOMAIN}/${key}`;
  }

}
