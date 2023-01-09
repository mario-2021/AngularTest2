import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  @Input() itemTitle: any;
  @Output() eventFromChild: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

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

}
