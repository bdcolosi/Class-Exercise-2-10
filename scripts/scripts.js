"use strict";
let category = "dev";

// const refreshQuoteButton = document.querySelector('#refreshQuote');

const sumbitFormButton = document.querySelector("#submitForm");

function getQuote (category) {
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const chuckSaysParagraph = document.querySelector("#chuckSays");
    
    get(apiUrl).then(function(response){
        chuckSaysParagraph.innerHTML = response.value;
    });
}; 

// refreshQuoteButton.addEventListener('click', function(e){
//     e.preventDefault();
//     getQuote(category);
// });

sumbitFormButton.addEventListener('click', function(e){
    e.preventDefault();
    // const getcategoryInput = document.querySelector("#categoryInput");
    const userCategory = document.querySelector('#userCategorySelect');
    category = userCategory.value;
    getQuote(category);

});
getQuote(category);
