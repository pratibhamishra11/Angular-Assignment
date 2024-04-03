import { Routes } from '@angular/router';
import { Component1Component } from './component1-Home/component1.component';

import { Component3UserDetailsComponent } from './component3-user-details/component3-user-details.component';

export const routes: Routes = [
    { path: '' , component: Component1Component},
    {path: 'user-details/:id', component: Component3UserDetailsComponent}
];

