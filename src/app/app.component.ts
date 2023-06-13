import { Component } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  calValue: number = 0;
  funcT: any = 'No Function';

  calNumber: string = 'noValue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(value: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(value);
    }else if(type == "function"){
      this.onFunctionClick(value);
    }

  }

  onNumberClick(value: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + value;

    } else {
      this.calNumber = value;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val :string){
    if(this.funcT == 'c'){
      this.clearAll();
    }
    if(this.funcT == 'No Function'){
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }else if(this.funcT != 'No Function'){
      this.secondNumber = this.calValue;

      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string){
    if(this.funcT == '+'){
      const result = this.firstNumber + this.secondNumber;
      this.totalAssignValues(result, val);
      if(this.funcT == '='){ this.onEqualPress() }
    }
    if(this.funcT == '-'){
      const result = this.firstNumber - this.secondNumber;
      this.totalAssignValues(result, val);
      if(this.funcT == '='){ this.onEqualPress() }
    }
    if(this.funcT == '*'){
      const result = this.firstNumber * this.secondNumber;
      this.totalAssignValues(result, val);
      if(this.funcT == '='){ this.onEqualPress() }
    }
    if(this.funcT == '%'){
      const result = this.firstNumber % this.secondNumber;
      this.totalAssignValues(result, val);
      if(this.funcT == '='){ this.onEqualPress() }
    }
    if(this.funcT == '/'){
      const result = this.firstNumber / this.secondNumber;
      this.totalAssignValues(result, val);
      if(this.funcT == '='){ this.onEqualPress() }
    }
  }

  totalAssignValues(result: number, val: string){
    this.calValue = result;
      this.firstNumber = result;
      this.secondNumber = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
  }
  onEqualPress(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'No Function';
    this.calNumber = 'noValue';
  }
  clearAll(){
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'No Function';
    this.calNumber = 'noValue';
    this.calValue = 0;

  }

  
  
}
