import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CardSmallComponent } from "../card-small/card-small.component";
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-trending-list',
  imports: [CardSmallComponent],
  templateUrl: './trending-list.component.html',
  styleUrl: './trending-list.component.scss'
})
export class TrendingListComponent {

  constructor(private gifService: GifsService) { }

  @Input()
  public trendingGifs: Gif[] = [];

  nextTrending() {
    this.gifService.nextPage();
  }
}
