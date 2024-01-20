import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  @Output() public onSearch: EventEmitter<string> = new EventEmitter();

  searchByCapital(event:string){
    console.log("Search desdeby capital term:" + event);
    this.onSearch.emit(event)
  }

}
