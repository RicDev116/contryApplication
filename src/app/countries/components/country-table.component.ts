import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../interfaces/country';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styles:[
    `img {
      width:25px
    }`
  ]
})

export class CountryTable implements OnInit {

  @Input()
  public countries: Country[] = [];

  constructor() { }

  ngOnInit() { }
}
