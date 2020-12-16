import {Injectable} from '@angular/core';
import {WordModel} from '../models/Word.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  getFromLocalStorage(): Array<WordModel> {
    const storage = JSON.parse(localStorage.getItem('words'));
    return storage;
  }

  setLocalStorage(data): any {
    localStorage.setItem('words', JSON.stringify(data));
  }
}
