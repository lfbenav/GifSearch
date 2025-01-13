import { GifsService } from './gifs/services/gifs.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './gifs/pages/home/home.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gifs00';

  // constructor( private gifService: GifsService) { }
  
  // getGifs() {
  //   this.gifService.searchTag('gato');
  // }

}
