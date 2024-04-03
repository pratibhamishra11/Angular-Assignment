import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInterface } from './user-interface';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='https://jsonplaceholder.typicode.com'
  httpClient = inject(HttpClient);

  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  constructor() { }

  getUserById(id: number):Observable<UserInterface| undefined>{
    return this.httpClient.get<UserInterface>(`${this.apiUrl}/users/${id}`)
  }

  setUserData(userData: any): void{
    this.userDataSubject.next(userData);
  }
}
