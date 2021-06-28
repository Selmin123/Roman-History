const People = [];

function Person(index, name, image, quote) {
    this.index = index;
    this.name = name;
    this.image = image;
    this.quote = quote;
}
var Jessie = new Person(0, "Jessie", "img/customer-0.jpg", "Yeah Mr.White, Yeah Science");
var Susie = new Person(1, "Susie", "img/customer-1.jpg", "AAAAAAAAAAAA");
var Jonathan = new Person(2, "Jonathan", "img/customer-2.jpg", "BBBBBBBBBB");
var Nathan = new Person(3, "Nathan", "img/customer-3.jpg", "CCCCCCCCCC");
var Walter = new Person(4, "Walter", "img/customer-4.jpg", "I am the ONE who knocks");
People.push(Jessie);
People.push(Susie);
People.push(Jonathan);
People.push(Nathan);
People.push(Walter);
console.log(People);

const buttons = document.querySelectorAll('.btn');
const imageDIV = document.querySelector('#customer-img');
let counter = 0;
document.getElementById("customer-img").src = People[counter].image;
document.getElementById("name").innerHTML = People[counter].name;
document.getElementById("quote").innerHTML = People[counter].quote;
document.getElementById('left-click').addEventListener('click', function() {
    if (counter == 0) {
        counter = 5;
    }
    counter -= 1;
    console.log(counter);
    imageDIV.src = People[counter].image;
    document.getElementById("name").innerHTML = People[counter].name;
    document.getElementById("quote").innerHTML = People[counter].quote;

});
document.getElementById('right-click').addEventListener('click', function() {
    if (counter == 4) {
        counter = -1;
    }
    counter += 1;
    console.log(counter);


    imageDIV.src = People[counter].image;
    document.getElementById("name").innerHTML = People[counter].name;
    document.getElementById("quote").innerHTML = People[counter].quote;


});








/*buttons.forEach(function(button) {
            button.addEventListener('click', function(e) {*/


//document.getElementById("customer-img").src = Susie.image;