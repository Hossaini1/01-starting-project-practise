import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private investmentService = inject(InvestmentService);

  results= computed(()=>this.investmentService.resultData() )
  // or
  // results=this.investmentService.resultData.asReadonly();

  // dat ist die methode ohne signal
  // get results(){
  //   return this.investmentService.resultData
  // }

  // das ist die methode ohne service und muss daten zu parentcomponent geschickt werden
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]>()

  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]


}
