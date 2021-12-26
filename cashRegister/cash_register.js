"use strict"

    function checkCashRegister (price, cash, cid) {
        let change = price - cash;

        if(price > cash) { 
            change = [];
        }

        const cid = new Array; 

        if(cid < change) {
            return {status: "INSUFFICIENT_FUNDS", change: []}
        } else if(cash == change) {
            return {status: "CLOSED", change: cash}; 
        } else {
            return {status: "OPEN", change: []};
        
        }
    }

    module.exports = {checkCashRegister}