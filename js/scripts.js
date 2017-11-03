//Business

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.sizePrice;
  this.toppingPrice;
  this.setPizzaPrice();
}
Pizza.prototype.setPizzaPrice = function(){
  return this.sizePrice + this.toppingPrice;
}

Pizza.prototype.yourSize = function() {
  if (this.size === "sm"){
    this.sizePrice = 10.75;
  }else if (this.size === "md"){
    this.sizePrice = 14.25;
  }else if (this.size === "lg"){
    this.sizePrice = 20.25;
  };
}

Pizza.prototype.yourTopping = function(){
  if (this.topping === "top-1"){
    this.toppingPrice = 4;
  }else if(this.topping === "top-4"){
    this.toppingPrice = 8;
  }else if(this.topping === "top-5"){
    this.toppingPrice = 11;
  };

}


//prototype for displaying user input

//user interface
$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();

    var checkedSize = $("select#pizza-size").val();
    var checkedTopping = $("select#pizza-topping").val();


    var pizza = new Pizza(checkedSize, checkedTopping);

    $("ul#your-pizza").append("<li>" + pizza.setPizzaPrice() + "</li>");
  });
});
