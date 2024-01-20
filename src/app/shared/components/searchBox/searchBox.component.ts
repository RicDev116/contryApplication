import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html'
})
export class SearchBoxComponent {

  @Input()
  public placeHolder:string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value:string):void{
    this.onValue.emit(value);
  }


}




/// cada vez que se emita una valor desde el
//(keyup.enter)="emitValue(txtInput.value)"
// seteamos una funcion desde donde se llama el componente searchbox
//en este caso by-capital-page
// <shared-search-box
//   placeHolder="Buscar por capital"
//   (onValue)="searchByCapital($event)" //AQUI
// ></shared-search-box>

