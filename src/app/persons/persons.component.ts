import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../model/personModel';
import { PersonsServiceService } from '../service/persons-service.service';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';
import { PersonDetailsComponent } from '../person-details/person-details.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule, SearchComponent, FormsModule, PersonDetailsComponent, RouterLink],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent {

  persons: Person[] = [];
  filteredPersons: Person[] = [];
  searchTerm: string = '';
  constructor(private service: PersonsServiceService){}

  ngOnInit() {

    this.service.getPersons().subscribe(result =>
     { this.persons = result
      this.filteredPersons = result
    }
      )
  }

  onSearch(searchTerm: string) { 
    this.searchTerm = searchTerm;
    this.filteredPersons = this.persons.filter(
      person =>
        person.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
         person.slug.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
