import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';

interface student {
  id: number,
  name: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<p [style]='someColor'>
    Hello World!
    from {{ name }}
    I'm {{ getAge() }}
    </p>
    <button type="button" (click)="doSomething()"> Click Here</button>
    <button [disabled]="!values" type="button" on-click="doSomething()"> Click Here</button>
    <br />
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
    <img [src]="imgUrl" />
    <br>
    <img bind-src="imgUrl" />
    <br>
    <img src="{{ imgUrl }}" />
    <p [class.blue]="values">Loreem</p>
    <p [class]="{ b: values, y: !values }">Loreem2</p>
    <p [ngClass]="{ b: values, y: !values }">Loreem2</p>
    <p [style.color]="myColor">Loreem3</p>
    <p [style.color]="values ? 'blue' : 'green'">Loreem3</p>
    <input [(ngModel)]="values" />
    <p> {{ values }} </p>
    <p *ngIf="!isActive">Hello World</p>
    <p *ngIf="!values">Hello World</p>
    <p [hidden]="!values">Hello World</p>
    `
})

export class AppComponent {

  values: string = '';

  name: string = 'MeroSH';

  someColor = 'color:#f00';

  imgUrl: string = 'https://via.placeholder.com/150';

  myColor: string = 'red';

  isActive: boolean = false;

  students: Array<student>;

  colors: Array<string>;

  selectedColor = '';

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  getAge() {
    return 33;
  }

  doSomething() {
    console.log('something');
  }

  onKey(value: string) {
    this.values = value;
  }

  constructor() {
    this.students = [
      { id: 1, name: 'X' },
      { id: 2, name: 'Y' },
      { id: 3, name: 'Z' }
    ];

    this.colors = [
      'red',
      'blue',
      'green'
    ];

  }

  refresh() {

    this.students = [
      { id: 1, name: 'X' },
      { id: 2, name: 'Y' },
      { id: 3, name: 'Z' },
      { id: 4, name: 'M' }
    ];

  }

  track(index: number, student: student) {
    return student.id
  };

  log(event: KeyboardEvent) {
    console.log(event);
  };

  value = '';
  onEnter(value: string) { this.value = value; }


}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ng-firstApp';
// }
