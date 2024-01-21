import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient ) { }

  public searchByCapital(term:string):Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        // tap(countries => console.log('Paso por el tap', countries))
        catchError(error => {
          console.log(error);
          return of([]);
        }),
      );
  }

  public searchByCountry(term:string):Observable<Country[]>{

    const url = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( () => of([])),
      );
  }

  public searchByRegion(term:string):Observable<Country[]>{

    const url = `${this.apiUrl}/region/${term}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( () => of([])),
      );
  }

  public searchContryByAlphaCode(code:string):Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError( () => of([])),
      );
  }
}
