// grab DOM elements

// set event listeners
console.log('hello universe!');
console.log(42);
console.log(42 + 42);

const catName = 'Cinder';
console.log("My cat's name is Nero.");
console.log(`My cat's name is ${catName}.`);

function sayHello(name) {
    console.log(`Hello ${name}!`);
    console.log('It is a drizzle day today.');
    console.log('It is v sunny.');
}

sayHello('Ryan');
sayHello ('Ariel')




// make a variable that references the update button

const updateBtn = document.getElementById('update');
updateBtn.addEventListener('click', () => {
    console.log('i am clicking ze button!');
// make
// make a variable that contains a reference to the html element 
//change text content of html element
const nameInput = document.getElementById('input');

const nameElem = document.getElementById('name');
nameElem.textContent = nameInput.value;
});


