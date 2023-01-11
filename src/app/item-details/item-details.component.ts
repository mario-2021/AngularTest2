import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() itemTitle: any;
  @Output() eventFromChild: EventEmitter<string> = new EventEmitter<string>();

  pushEvents() {
    this.eventFromChild.emit('my title with EventEmitter');
  }

  @Input() title: string = '';
  @Output() titleChange: EventEmitter<string> = new EventEmitter();

  EventEmitter(event: any) { // without type info
    this.title = event.target.value;
  }

  addNewItem(value: string) {
    this.titleChange.emit(value);
  }

  @Input() titleChild: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('changes is', changes);
  }

  ngOnInit(): void {
    console.log("On Init");
  }

  constructor() {
    console.log("Constructor");
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

}
