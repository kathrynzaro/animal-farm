import { findById } from '../utils.js';
import { animals } from '../data.js';
console.log('hello from animal detail');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const animal = findById(params.get('id'), animals);
console.log(animal);

const animalName = document.getElementById('animal-name');
animalName.textContent = animal.name;

const animalImage = document.getElementById('animal-image');
animalImage.src = `../assets/${animal.type}.svg`;

const animalSays = document.getElementById('animal-says');
animalSays.textContent = animal.says;

