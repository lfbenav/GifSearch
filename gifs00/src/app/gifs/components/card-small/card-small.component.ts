import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-card-small',
  imports: [],
  templateUrl: './card-small.component.html',
  styleUrl: './card-small.component.scss'
})
export class CardSmallComponent {

  @Input()
  public title: string = '';
    
  @Input()
  public url: string ='';

}
