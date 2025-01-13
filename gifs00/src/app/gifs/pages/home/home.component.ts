import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";
import { CardListComponent } from "../../components/card-list/card-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';
import { TrendingListComponent } from "../../components/trending-list/trending-list.component";
import { RandomListComponent } from "../../components/random-list/random-list.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchBoxComponent, CardListComponent, TrendingListComponent, RandomListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private gifService: GifsService) { }

  get gifs(): Gif[] {
    return this.gifService.gifList;
  }

  get trendingGifs(): Gif[] {
    return this.gifService.trendingList;
  }

  get randomGif(): Gif {
    return this.gifService.randomGif;
  }

}
