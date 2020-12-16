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

  setLocalStorage(key: string, data: WordModel[]): any {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
