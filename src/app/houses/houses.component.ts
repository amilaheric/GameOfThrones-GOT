import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseServiceService } from '../service/house-service.service';
import { HouseDetailComponent } from '../house-detail/house-detail.component';
import { House } from '../model/houseModel';
import { RouterLink, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [CommonModule, HouseDetailComponent, RouterModule, RouterLink, SearchComponent, FormsModule],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.css'
})
export class HousesComponent {

  houses: House[] = [];
  filteredHouses: House[] = [];
  searchTerm: string = '';
  constructor(private houseService: HouseServiceService) {}

  ngOnInit() {
    this.houseService.getHouses().subscribe(result=>{
        this.houses = result;
        this.filteredHouses = result;
  });
}


onSearch(searchTerm: string): void {
  this.searchTerm = searchTerm;
    this.filteredHouses = this.houses.filter(
    house =>
      house.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      house.slug.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
  
}
