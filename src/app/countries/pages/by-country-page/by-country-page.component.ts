import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries:Country[] = [];

  constructor(private countriesServices:CountriesService){}

  searchByCountry(term:string){
    console.log("Search desde by country term:" + event);
    this.countriesServices.searchByCountry(term)
      .subscribe(countries => {
        this.countries = countries;
      })
  }

}
