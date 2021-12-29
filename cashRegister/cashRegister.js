"use strict"

    function checkCashRegister (price, cash, CID) {
        let changeDue = (cash * 100) - (price * 100);

        function sumCID () {
            let sum = 0;
            CID.map(denomination => sum += denomination[1] * 100)
            return sum;
        }

        if(sumCID() < changeDue) {
            return {status: "INSUFFICIENT_FUNDS", change: []}
        } else if(sumCID() === changeDue) {
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
                const denominationValueInInteger = denominationItem[1] * 100
                if(changeDue >= denominationValueInInteger) {
                    let changeInDenomination = Math.trunc(changeDue/denominationValueInInteger) * denominationValueInInteger
                    const matchedDenominationInDrawer = CID.find(function(CIDDenominationItem) {
                        return CIDDenominationItem[0] === denominationItem[0]
                    }) 
                    
                    if(changeInDenomination > matchedDenominationInDrawer[1] * 100) {
                        changeInDenomination = matchedDenominationInDrawer[1] * 100 
                    }
                    changeDueInDenominations.push([denominationItem[0], changeInDenomination])
                    changeDue -= changeInDenomination
                } 
            })
            if (changeDue > 0) return {status: "INSUFFICIENT_FUNDS", change: []}
            return {status: "OPEN", change: changeDueInDenominations.map(denominationItem => [denominationItem[0], denominationItem[1] / 100])};
        }
    }



    module.exports = {checkCashRegister}