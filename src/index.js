// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var quantity = {"H":0,"Q":0,"D":0,"N":0,"P":0};
    var pricesObj = {"H":50,"Q":25,"D":10,"N":5,"P":1};
    if(currency === 0) {
    	return {};
    }
    if(currency > 10000) {
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    for (key in quantity) {
  		var price = pricesObj[key];
  		while (currency >= price) {
  			quantity[key]++;
  			currency = currency - price;
  		}
  		if (quantity[key] === 0) {
  			delete quantity[key];
  		}
	}
	return quantity;
}
