 namespace TSCafe {

     export enum CoffeeSelections { Latte, Espresso, Mocha, Pune,     
     Macchiato, Cappuccino };
     export enum PaymentOptions { Credit, Debit, Gift, Cash };

     export interface ICafe {
       pay(paymentOption: PaymentOptions): void;
       makeSelection(selection: CoffeeSelections): void;
       dispense(): void;
     }

     export class Cafe implements ICafe {
       // simplified representation of payment validation
       paymentValidated(paymentOption: PaymentOptions): boolean {
       // validate payment type and return validation results
       return true;
     }

     // simplified representation of selection availability check
     selectionAvailable(selection: CoffeeSelections): boolean {
       // validate payment type and return validation results
       return true;
     }

     pay(paymentOption: PaymentOptions) {
       if (this.paymentValidated(paymentOption)) {
         console.log('Payment Successful! Select your beverage.');
       } else {
         console.log('Payment failed! Try again or try a different   
         payment option.');
       } 
     }

     makeSelection(selection: CoffeeSelections): void {
       if (this.selectionAvailable(selection)) {
         console.log('Selection Confirmed!');
       } else {
         console.log('Sorry, we are out of ', selection, '. Please    
         select a different beverage!');
       }
     }

     dispense(): void {
       console.log('Dispensing...');
     }
     }

     export class ReceptionCafe extends Cafe implements ICafe {
       pay(paymentOption: PaymentOptions) {
       if (paymentOption !== PaymentOptions.Cash) {
         console.log('Sorry, only cash payments accepted at  
         Reception!');
       } else {
         super.pay(paymentOption);
       }
     }

     makeSelection(selection: CoffeeSelections): void {
       if (selection === CoffeeSelections.Pune) {
         console.log('Sorry, this selection is not available at   
         Reception!');
       } else {
         super.makeSelection(selection);
       }
      }
     }
    }