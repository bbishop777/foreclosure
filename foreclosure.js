'use strict';
var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;
	function loan() {
		var account = {borrowed: 550000, balance: 286000, 
		monthlyPayment: 1700, defaulted: 0, 
		defaultsToForeclose: 5, foreclosed: false};
		function missPayment() {
		account.defaulted = account.defaulted + 1;
			if(account.defaulted >= account.defaultsToForeclose) {
			account.foreclosed = true;
			}
		}
	return gbal = {getBalance: function(){
		return account.balance}, receivePayment: function(amount) {
			if (amount < account.monthlyPayment) {
				return missPayment();
			}
		}
			account.balance = account.balance - amount;
		}
	}
		};
	stevesLoan = bal;
	return stevesLoan;
	}
console.log(loan());
