import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Subscription} from 'rxjs';
import {WordModel} from '../../models/Word.model';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss'],
})
export class WordsComponent implements OnInit, OnDestroy {
  duckWords: WordModel[] = [];
  elephantWords: WordModel[] = [];
  lionWords: WordModel[] = [];

  private sub: Subscription;
  tags: string[] = [];


  constructor(private apiService: ApiService,
              private localStorageService: LocalStorageService,
  ) {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {

  }

  onGetWords(): void {
    this.sub = this.apiService.getDuckWord().subscribe(data => {
      this.duckWords = data;
      this.localStorageService.setLocalStorage('ducks', this.duckWords);
    });
    this.sub = this.apiService.getElephantWord().subscribe(data => {
      this.elephantWords = data;
      this.localStorageService.setLocalStorage('elephants', this.elephantWords);
    });
    this.sub = this.apiService.getLionWord().subscribe(data => {
      this.lionWords = data;
      this.localStorageService.setLocalStorage('lion', this.lionWords);
    });
  }


  onGetResults(): void {
    this.duckWords.map((word) => {
      word.tags.forEach((tag) => {
        console.log(tag);
        this.tags.push(tag);
      });
    });

  }
}
