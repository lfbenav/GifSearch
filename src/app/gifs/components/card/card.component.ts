import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  public title: string = '';
  
  @Input()
  public url: string ='';

}
