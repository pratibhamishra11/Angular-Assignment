import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from './component1-Home/component1.component';
import { Component2UserCardComponent } from './component2-user-card/component2-user-card.component';
import { Component3UserDetailsComponent } from './component3-user-details/component3-user-details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Component1Component,Component2UserCardComponent , Component3UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My';
}
