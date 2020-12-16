import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {WordModel} from '../models/Word.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getDuckWord(): Observable<WordModel[]> {
    return this.http.get<WordModel[]>('assets/duck_words.json');
  }
  getElephantWord(): Observable<WordModel[]> {
    return this.http.get<WordModel[]>('assets/elephant_words.json');
  }
  getLionWord(): Observable<WordModel[]> {
    return this.http.get<WordModel[]>(`assets/lion.json`);
  }

}
