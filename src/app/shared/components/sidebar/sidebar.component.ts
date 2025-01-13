import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private gifService: GifsService) { }

  get tags(): string[] {
    return this.gifService.tagsHistory;
  }

  searchTag(tag: string): void {
    this.gifService.searchTag(tag)
  }

}
