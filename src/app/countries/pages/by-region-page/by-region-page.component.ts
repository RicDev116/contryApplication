import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  public countries:Country[] = [];
  public regions:Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?:Region;
  public isLoading:boolean = false;

  constructor(private countriesServices:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesServices.cacheStore.byRegion.region;
  }

  searchByRegion(region:Region){
    this.selectedRegion = region;
    console.log("Search desde by country term:" + region);
    this.countriesServices.searchByRegion(region)
      .subscribe(countries => {
        this.countries = countries;
      })
  }
}
