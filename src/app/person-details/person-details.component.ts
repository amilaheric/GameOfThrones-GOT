import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsServiceService } from '../service/persons-service.service';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
  houseSlug: string;
  personDetails: any = {};
  
  constructor(private route: ActivatedRoute, private service: PersonsServiceService,private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.houseSlug = params['slug'];
      this.fetchPersonDetails();
    });
  }

  fetchPersonDetails() {
    this.service.getPersonDetails(this.houseSlug).subscribe(
      (details) => {
        this.personDetails = details[0];
      },
      (error) => {
        console.error('Error fetching house details:', error);
      }
    );
  }
}
