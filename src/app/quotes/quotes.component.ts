import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesServiceService } from '../service/quotes-service.service';
import { Quote } from '../model/quoteModel';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

  quotes: any;

constructor(private service: QuotesServiceService) {

}

ngOnInit() {

  this.service.getRandomQuotes().subscribe(result =>
   { 
    this.quotes = result;
   },
   error => {
     console.error('Error fetching random quotes:', error);
   })
}

replaceQuotes(): void {
  this.service.getReplaceRandom(5).subscribe(
    (newQuotes: any)  => {
      this.quotes = newQuotes;
    },
    error => {
      console.error('Error fetching random quotes:', error);
    }
);}
}
