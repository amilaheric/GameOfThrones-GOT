import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HouseServiceService } from '../service/house-service.service';

@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './house-detail.component.html',
  styleUrl: './house-detail.component.css'
})
export class HouseDetailComponent {

  houseSlug: string;
  houseDetails: any = {};

  constructor(private route: ActivatedRoute, private houseService: HouseServiceService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.houseSlug = params['slug'];
      this.fetchHouseDetails();
    });
  }
  fetchHouseDetails() {
   
    this.houseService.getHouseBySlug(this.houseSlug).subscribe(
      (details) => {
        this.houseDetails = details[0];        
      },
      (error) => {
        console.error('Error fetching house details:', error);
      }
    );
  }
}
