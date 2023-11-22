import { Routes } from '@angular/router';

import { HousesComponent } from './houses/houses.component';
import { PersonsComponent } from './persons/persons.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

export const routes: Routes = [
    { path: 'houses', component: HousesComponent},  
    { path: '', component: HousesComponent},   
    { path: 'houses/:slug', component: HouseDetailComponent },
    { path: 'person/:slug', component: PersonDetailsComponent },
    { path: 'persons', component: PersonsComponent},
    { path: 'quotes', component: QuotesComponent}
];
