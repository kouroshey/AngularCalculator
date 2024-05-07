import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-calculator';

  public showNumber = '0';
  public firstValue: number | null = null;
  public functionT = 'no function';

  onNumberClick(val: string) {
    if (this.showNumber === '0') {
      this.showNumber = val.toString();
    } else {
      this.showNumber = `${this.showNumber}${val}`;
    }
  }

  onFunctionClick(funcT: string) {
    this.firstValue = parseFloat(this.showNumber);
    this.showNumber = '0';
    this.functionT = `${funcT}`;
  }

  onClear() {
    this.showNumber = '0';
    this.firstValue = 0;
    this.functionT = 'no function';
  }

  calculate() {

    if (this.firstValue) {
      const a = this.firstValue;
      const b = parseFloat(this.showNumber);

      let result;
      if (this.functionT === '/') {
        result = a / b;
      } else if (this.functionT === '*') {
        result = a * b;
      } else if (this.functionT === '-') {
        result = a - b;
      } else if (this.functionT === '+') {
        result = a + b;
      }

      if (result) {
        this.showNumber = result.toString();
        this.firstValue = result;
        this.functionT = 'no function';
      }
    }
  }

  onClick(val: string, type: 'function' | string) {
    if (type === 'number') {
      this.onNumberClick(val);
    } else {
      this.onFunctionClick(val);
    }
  }
}
