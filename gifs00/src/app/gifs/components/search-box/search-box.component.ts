import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
 
  constructor(private gifService: GifsService) { }

  public searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
