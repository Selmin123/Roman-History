const quotes= [
    {
        name: 'author1',
        quote: 'quote1'
    },
    {
        name: 'author2',
        quote: 'quote2'
    },
    {
        name: 'author3',
        quote: 'quote3'
    },
    {
        name: 'author4',
        quote: 'quote4'
    }
]
const quoteBtn= document.querySelector('#quoteBtn');
const quote= document.querySelector('#quote');
const quoteAuthor= document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number= Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML= quotes[number].name;
    quote.innerHTML= quotes[number].quote;
}