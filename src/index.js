import cards from './menu.json';
import foodCardTpl from './templates/food-card.hbs';
import './styles.css'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const foodContainer = document.querySelector('.js-menu');
const cardsMarkup = createFoodCardsMarkup(cards);

const body = document.querySelector('body');
body.classList.add(Theme.LIGHT);

foodContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createFoodCardsMarkup(cards) {
    return cards.map(foodCardTpl).join('');
}

const currentBodyTheme = fillCurrentTheme();

const input = document.querySelector('#theme-switch-toggle');
input.addEventListener('change', changeBodyTheme)

function isChecked () {
    const checkbox = document.querySelector('input');
    const body = document.querySelector('body');

    if(body.classList.contains(Theme.DARK)){
        checkbox.checked = true;
        localStorage.setItem('checked', checkbox.checked)
    } else {
        checkbox.checked = false;
        localStorage.removeItem('checked')
    }
}

function changeBodyTheme (evt) {
    const body = document.querySelector('body');
    body.classList.toggle(Theme.DARK);

    const currentTheme = body.classList.value;
    localStorage.setItem('body-theme', currentTheme);

    isChecked ();
}

function fillCurrentTheme () {
    const body = document.querySelector('body');
    const checkbox = document.querySelector('input');

    const savedConfig = localStorage.getItem('body-theme');
    const savedValueChecked = localStorage.getItem('checked');

    if (savedConfig) {
        body.classList.value = savedConfig;
        checkbox.checked = savedValueChecked;
    }
}