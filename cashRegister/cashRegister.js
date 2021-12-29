"use strict"

    function checkCashRegister (price, cash, CID) {
        let changeDue = cash - price;

        function sumCID () {
            let sum = 0;
            CID.map(denomination => sum += denomination[1])
            return sum;
        }


        if(sumCID() < changeDue) {
            return {status: "INSUFFICIENT_FUNDS", change: []}
        } else if(sumCID === changeDue) {
            return {status: "CLOSED", change: CID}; 
        } else {
            
            let denominations = [
                ['ONE HUNDRED', 100],
                ['TWENTY', 20],
                ['TEN', 10],
                ['FIVE', 5],
                ['ONE', 1],
                ['QUARTER', 0.25],
                ['DIME', 0.1],
                ['NICKEL', 0.05],
                ['PENNY', 0.01]
            ]
            let changeDueInDenominations = []

            denominations.map(function(denominationItem) {
                if(changeDue >= denominationItem[1]) {
                    let changeInDenomination = Math.trunc(changeDue/denominationItem[1]) * denominationItem[1]
                    changeDueInDenominations.push([denominationItem[0], changeInDenomination])
                    changeDue -= changeInDenomination
                } 
            })
            return {status: "OPEN", change: changeDueInDenominations};
        
        }
    }


    module.exports = {checkCashRegister}