

/*TEST

 describe("basket total calculator", function () {
        var basketCalc = new BasketCalculator();
        it("Can add items to the basket total", function () {
            expect(basketCalc.add(2.3)).toEqual(2.3);
            expect(basketCalc.add(1.3)).toEqual(3.6);
            expect(basketCalc.add(5)).toEqual(8.6);
        });
        it("Can remove items from the basket total", function () {
            expect(basketCalc.remove(2)).toEqual(6.6);
            expect(basketCalc.remove(2.6)).toEqual(4);
        });
    });

    */


///global function BasketCalculator
  function BasketCalculator(){
  	'use strict';
  	this.total = 0;

  	this.add = function(val){
  		this.total = this.total + val;
  		return this.total;
  	}
  	this.remove = function(val){
  		if(this.total >= val ){
  			this.total = this.total - val;
  		}
  		return this.total;
  	}
  }();