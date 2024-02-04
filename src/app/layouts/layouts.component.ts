import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { EmptyComponent } from './components/empty/empty.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [NgIf, EmptyComponent, SidenavComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss',
})
export class LayoutsComponent {
  layout: string | undefined;
}
