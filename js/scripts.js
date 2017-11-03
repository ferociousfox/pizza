//Business

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.sizePrice;
  this.toppingPrice;
  this.setPizzaPrice();
}


Pizza.prototype.yourSize = function() {
  if (this.size === 10){
    this.sizePrice = 10;
  }else if (this.size === 14){
    this.sizePrice = 14;
  }else if (this.size === 20){
    this.sizePrice = 20;
  };
}

Pizza.prototype.yourTopping = function(){
  if (this.topping === 1){
    this.toppingPrice = 4;
  }else if(this.topping === 4){
    this.toppingPrice = 8;
  }else if(this.topping === 5){
    this.toppingPrice = 11;
  };
}

Pizza.prototype.setPizzaPrice = function(){
  return this.sizePrice + this.toppingPrice;
}

//prototype for displaying user input

//user interface
$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();

    var checkedSize = parseInt($("select#pizza-size").val());
    var checkedTopping = parseInt($("select#pizza-topping").val());
    var pizza = new Pizza(checkedSize, checkedTopping);
    console.log(checkedSize);
    console.log(checkedTopping);

    $("ul#your-pizza").append("<li>" + pizza.setPizzaPrice() + "</li>");
  });
});
