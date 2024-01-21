import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries:Country[] = [];

  constructor(private countriesServices:CountriesService){}

  searchByRegion(term:string){
    console.log("Search desde by country term:" + event);
    this.countriesServices.searchByRegion(term)
      .subscribe(countries => {
        this.countries = countries;
      })
  }
}
