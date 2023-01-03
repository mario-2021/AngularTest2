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
    `
})

export class AppComponent {
  values: string = '';
  name: string = 'MeroSH';
  someColor = 'color:#f00';
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
