import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  numberOne: number = 0;
  numberTwo: number = 0;
  result: number = 0;

  resultCalculator() {
    console.log("Chamando método");
    this.result = this.numberOne + this.numberTwo;
  }
}