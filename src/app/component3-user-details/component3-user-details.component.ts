import { Component , Input,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../user.service';
import { UserInterface } from '../user-interface';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component3-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component3-user-details.component.html',
  styleUrl: './component3-user-details.component.css'
})
export class Component3UserDetailsComponent implements OnDestroy {
  sub:Subscription;
  route:ActivatedRoute=inject(ActivatedRoute);
  userService = inject(UserService);
  userInterface: UserInterface| undefined;

  constructor(){
    const userCardId = Number(this.route.snapshot.params['id']);
    this.sub=this.userService.getUserById(userCardId).subscribe((user:any) =>{
      this.userInterface=user
    });
   
  }
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
  // @Input() userSelected!: UserInterface;
}
