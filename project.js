var item1 = document.querySelector(".pizza")
var item2 = document.querySelector(".burger")
var item3 = document.querySelector(".chicken-pasta")
var item4 = document.querySelector(".grilled-chicken")
var add=document.querySelector(".add-element")
var remove = document.querySelector(".remove-element")
var cart = document.querySelector(".list-group-item-1")
var total = document.querySelector(".list-group-item-total")
var additem=[]

cart.style.display="none";
total.style.display="none";

item1.addEventListener("click", function(){

  add.classList.add("active")
 
});

add.addEventListener("click",function(){
    cart.style.display="block";
    remove.classList.add("active")
    total.style.display="block";
})
remove.addEventListener("click", function(){
    cart.style.display="none";
    total.style.display="none";
    remove.classList.toggle("active")
    add.classList.toggle("active")
})