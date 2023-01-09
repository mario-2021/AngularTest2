import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  itemTitleInParent: string = '';

  onKey(event: any) { // without type info
    this.itemTitleInParent = event.target.value;
  }

  constructor() { }

}
