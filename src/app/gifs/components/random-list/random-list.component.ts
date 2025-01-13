import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';
import { CardSmallComponent } from "../card-small/card-small.component";

@Component({
  selector: 'gifs-random-list',
  imports: [CardSmallComponent],
  templateUrl: './random-list.component.html',
  styleUrl: './random-list.component.scss'
})
export class RandomListComponent {

  constructor(private gifService: GifsService) { }
  
  @Input()
  public randomGif!: Gif;

  nextRandom() {
    this.gifService.nextRandom()
  }
}
