import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesComponent } from '../houses/houses.component';
import { RouterLink, RouterModule } from '@angular/router';
import { QuotesComponent } from '../quotes/quotes.component';
import { PersonsComponent } from '../persons/persons.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, HousesComponent, RouterModule, RouterLink, QuotesComponent, PersonsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
