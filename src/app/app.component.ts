import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html'
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
    `
})

export class AppComponent {
  values: string = '';
  name: string = 'MeroSH';
  someColor = 'color:#f00';
  imgUrl: string = 'https://via.placeholder.com/150';
  myColor: string = 'red';
  getAge() {
    return 33;
  }
  doSomething() {
    console.log('something');
  }
  onKey(value: string) {
    this.values = value;
  }
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
