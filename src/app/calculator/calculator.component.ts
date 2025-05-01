import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  numberOne: number = 0;
  numberTwo: number = 0;
  result: number = 0;
  operation: string = "";
  error: string = "";

  resultCalculator() {
    switch (this.operation) {
      case "sum":
        this.result = this.numberOne + this.numberTwo;
        break;

      case "subtract":
        this.result = this.numberOne - this.numberTwo;
        break;
        
      case "multiply":
        this.result = this.numberOne * this.numberTwo;
        break;

      //TODO: Verificar como resetar o erro;
      case "split": 
        if (this.numberTwo == 0) {
          this.error = "Valor inválido para operação!";
          break;
        }
        this.result = this.numberOne / this.numberTwo;
        break;

      default:
        break;
    }
  }
}