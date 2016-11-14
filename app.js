var wish = W$("Srivani","Challa","te");
wish.validate();

console.log(wish);

//var newWish = W$($("#person").val(),"Challa","te");
  //  newWish.wish_html("#greet");


$("#person").change(function(){
    console.log("Inside Change");
    var newWish = W$($(this).val(),"Challa","en");
    newWish.wish_html("#greet");
});
