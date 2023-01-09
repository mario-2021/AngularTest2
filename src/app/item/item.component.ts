import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  itemTitleInParent: string = '';
  title: string = '';

  onKey(event: any) { // without type info
    this.itemTitleInParent = event.target.value;
  }

  titleOnKey(event: any) { // without type info
    this.title = event.target.value;
  }

  dataFromChild: string = '';

  constructor() { }

}
