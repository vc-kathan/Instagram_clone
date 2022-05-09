import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {
  sessionInitial = 'Firebase';
  constructor() { }

  setEncryptedLocalStorage(key: string, data: any): void {
    if (data && key) {
      const encryptedString = this.encryptData(data);
      const keyName = this.sessionInitial + '-' + key.trim();
      window.localStorage.setItem(keyName, encryptedString);
    }
  }

  getDecryptedLocalStorage(key: string): string | boolean {
    const keyName = this.sessionInitial + '-' + key.trim();
    const localStorageData = window.localStorage.getItem(keyName);
    if (localStorageData) {
      return this.decryptData(localStorageData);
    } else {
      return false
    }
  }

  removeEncryptedLocalStorage(key: string): void {
    if (key) {
      const keyName = this.sessionInitial + '-' + key.trim();
      window.localStorage.removeItem(keyName);
    }
  }

  decryptData(data: any): string {
    return JSON.parse(decodeURIComponent(window.atob(data)));
  }

  encryptData(data: any): string {
    return btoa(encodeURIComponent(JSON.stringify(data)));
  }
}
