/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var totalCid = cid.reduce((acc, next) => acc + next[1], 0);
    if (totalCid < change) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (totalCid === change) {
        return {status: "CLOSED", change: cid};
    } else {
        var changeArr = [];
        cid = cid.reverse();
        var currencyUnit = {
            "PENNY": 0.01,
            "NICKEL": 0.05,
            "DIME": 0.1,
            "QUARTER": 0.25,
            "ONE": 1,
            "FIVE": 5,
            "TEN": 10,
            "TWENTY": 20,
            "ONE HUNDRED": 100
        };
        for (var i = 0; i < cid.length; i++) {
            var currency = cid[i][0];
            var currencyTotal = cid[i][1];
            var currencyValue = currencyUnit[currency];
            var currencyChange = 0;
            while (change >= currencyValue && currencyTotal > 0) {
                change -= currencyValue;
                change = Math.round(change * 100) / 100;
                currencyTotal -= currencyValue;
                currencyTotal = Math.round(currencyTotal * 100) / 100;
                currencyChange += currencyValue;
            }
            if (currencyChange > 0) {
                changeArr.push([currency, currencyChange]);
            }
        }
        if (change > 0) {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        return {status: "OPEN", change: changeArr};
    }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); // {status: "INSUFFICIENT_FUNDS", change: []}