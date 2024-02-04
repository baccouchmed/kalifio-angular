import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgForOf } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule,
    NgForOf,
    RouterLink,
    MatCard,
    MatCardContent,
    MatIcon,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  items = [
    { title: 'companies', icon: 'home' },
    { title: 'users', icon: 'supervised_user_circle' },
    { title: 'features', icon: 'lock_open' },
    { title: 'acceptance-criterias', icon: 'lock_open' },
    { title: 'equipments', icon: 'lock_open' },
    { title: 'operations', icon: 'lock_open' },
    { title: 'perimeters', icon: 'lock_open' },
    { title: 'status', icon: 'lock_open' },
    { title: 'tests', icon: 'lock_open' },
    { title: 'units', icon: 'lock_open' },
  ];
}
