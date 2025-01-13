import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, RandomSearchResponse, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];
  public trendingList: Gif[] = [];
  public randomGif!: Gif;
  private _tagsHistory: string[] = [];
  
  private serviceUrl = 'https://api.giphy.com/v1/gifs';
  private apiKey = '9Ytsx7MYgCxq5tAl1veLV6OltzjBob4f'; 

  private trendingOffset: number = 0;
  private trendingLimit: number = 5;
  private trendingMax: number = 499;

  constructor( private http: HttpClient ) {
    this.loadLocalStorage()
    this.loadTrending()
    this.loadRandom()
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) { return };
    
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)
  }

  private organizeHistory(tag: string): void {
    tag = tag.trim().toLowerCase();
    // Si se repite, lo borra
    if (this._tagsHistory.includes( tag )) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag ); 

    }

    // Ponerlo al inicio
    this._tagsHistory.unshift( tag );
    
    // Solo poner 10
    this._tagsHistory = this._tagsHistory.splice(0, 10)
  
    // Guardar
    this.saveLocalStorage()
  }

  searchTag( tag: string ): void {  // Por mejorar: Observable
    if (tag.trim().length === 0) { return };

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    const headers = {
      'Content-Type': 'application/json'
    }

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe( (response) => {
        this.gifList = response.data;
        console.log(this.gifList)
      });
  }

  private loadTrending( ): void {

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '5')
      .set('offset', this.trendingOffset.toString());

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/trending`, { params })
      .subscribe( (response) => {
        this.trendingList = response.data;
        console.log(this.trendingList)
      });
  }

  nextPage( ): void {
    this.trendingOffset += this.trendingLimit;
    if (this.trendingOffset >= this.trendingMax) {
      this.trendingOffset = 0;
    }
    this.loadTrending();
  }

  private loadRandom( ): void {
    const params = new HttpParams()
      .set('api_key', this.apiKey)

    this.http
      .get<RandomSearchResponse>(`${this.serviceUrl}/random`, { params })
      .subscribe( (response) => {
        this.randomGif = response.data;
        console.log(this.randomGif)
      });
  }

  nextRandom( ): void {
    this.loadRandom()
  }


}
