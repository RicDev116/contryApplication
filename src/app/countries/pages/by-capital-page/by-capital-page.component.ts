import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries:Country[] = [];

  constructor(private countriesServices:CountriesService){}

  searchByCapital(term:string){
    console.log("Search desdeby capital term:" + event);
    this.countriesServices.searchByCapital(term)
      .subscribe(countries => {
        this.countries = countries;
      })
  }

}
