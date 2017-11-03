//Business
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.sizePrice = sizePrice;
  this.toppingPrice = toppingPrice;
  this.setPizzaPrice = setPizzaPrice;
};

Pizza.prototype.yourSize = function() {
  
  return this.sizePrice;
};
Pizza.prototype.yourTopping = function(){

  return this.toppingPrice;
}

Pizza.prototype.setPizzaPrice = function(){

 return this.size + this.topping
};

//prototype for displaying user input

//user interface
$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();

    var selectedSize = $("select#pizza-size").val();
    var selectedTopping = $("select#pizza-topping").val();
    console.log(selectedTopping);

    var pizza = new Pizza();
  });
});
