let navElement = document.getElementById('navBar');
let burgerElement = document.getElementById('burgerBar');
burgerElement.addEventListener('click', function () {
    navElement.classList.toggle("activeNav");
});
let btnElement = document.getElementById("button");
btnElement.addEventListener('click', function(){
    alert("Thank You For Subscription");
});