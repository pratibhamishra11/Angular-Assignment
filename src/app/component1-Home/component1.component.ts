import { Component , OnInit , inject} from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component2UserCardComponent } from '../component2-user-card/component2-user-card.component';
import { Component3UserDetailsComponent } from '../component3-user-details/component3-user-details.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule , HttpClientModule,Component2UserCardComponent,Component3UserDetailsComponent,NgFor],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
  httpClient = inject(HttpClient);
  data: any = [];

  ngOnInit(): void {
      this.fetchData();
  }

  fetchData() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((data ) => {
      console.log(data);
      this.data = data;
    });
  }

  user: any;
  selectedUser: any;

  onUserSelected(user: any): void{
    this.selectedUser = user;
  }
}
