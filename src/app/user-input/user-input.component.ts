import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
enteredInitialInvestment='0';


 

  onSubmit(){
    console.log('Submitted',this.enteredInitialInvestment);
    
  }

}