const person = document.querySelector('.person--js');


const heading = document.querySelector('.person__name--js');
console.dir(heading);

console.dir(heading.textContent);

heading.textContent = 'Małgorzata Kuźmierz';

const personDescription = document.querySelector('.person__description--js');
personDescription.insertAdjacentText('beforeend', '👦');