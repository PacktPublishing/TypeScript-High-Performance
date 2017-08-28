namespace TSCafe {
       export class BreakRoomCafe extends Cafe implements ICafe {
         makeSelection(selection: CoffeeSelections): void {
         if (selection === CoffeeSelections.Macchiato) {
             console.log('Sorry, this selection is not available at  
             Break Room!');
         } else {
           super.makeSelection(selection);
         }
        }
      }
    }