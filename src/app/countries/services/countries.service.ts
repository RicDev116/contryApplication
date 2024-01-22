import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient ) { }

  private getCountriesRequest(url:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( () => of([])),
        delay( 2000 ),
      );
  }

  public searchByCapital(term:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url);
  }

  public searchByCountry(term:string):Observable<Country[]>{

    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url);
  }

  public searchByRegion(term:string):Observable<Country[]>{

    const url = `${this.apiUrl}/region/${term}`;
    return this.getCountriesRequest(url);
  }

  public searchContryByAlphaCode(code:string):Observable<Country|null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ?countries[0]: null),
        catchError( () => of(null)),
      );
  }
}
