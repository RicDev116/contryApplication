
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>
  private debouncerSuscription?:Subscription;

  @Input()
  public placeHolder:string = '';

  @Input()
  public initialValue:string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(400),
    ).subscribe (value => {
      console.log('debouncer value: ', value);
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value:string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next( searchTerm)
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

