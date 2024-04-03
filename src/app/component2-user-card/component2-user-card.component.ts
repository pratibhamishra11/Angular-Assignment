import { Component , Input, OnInit, inject , EventEmitter , Output } from '@angular/core';
import { UserInterface } from '../user-interface';
import { Component3UserDetailsComponent } from '../component3-user-details/component3-user-details.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component2-user-card',
  standalone: true,
  imports: [Component3UserDetailsComponent , RouterLink , RouterOutlet , CommonModule],
  templateUrl: './component2-user-card.component.html',
  styleUrl: './component2-user-card.component.css'
})
export class Component2UserCardComponent implements OnInit{
  ngOnInit(): void {
      
  }
  @Input() userCard!: UserInterface;
  constructor(){

  }
  @Output() userSelected: EventEmitter<any> = new EventEmitter<any>();

  onSelectUser(): void{
    this.userSelected.emit(this.userCard);
  }
}
