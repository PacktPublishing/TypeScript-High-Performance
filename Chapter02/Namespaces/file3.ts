/// <reference path="file1.ts" />
    /// <reference path="file2.ts" />

    const receptionCafe: TSCafe.ReceptionCafe = new     
    TSCafe.ReceptionCafe();
    receptionCafe.pay(TSCafe.PaymentOptions.Credit);

    const breakRoomCafe: TSCafe.BreakRoomCafe = new  
    TSCafe.BreakRoomCafe();
    breakRoomCafe.pay(TSCafe.PaymentOptions.Debit);
    breakRoomCafe.makeSelection(TSCafe.CoffeeSelections.Macchiato);
    breakRoomCafe.makeSelection(TSCafe.CoffeeSelections.Pune);
    breakRoomCafe.dispense();