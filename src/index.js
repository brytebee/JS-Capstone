import './style.css';
import fetchMeals from './module/display.js';

fetchMeals();

document.getElementsByClassName('icon')[0].addEventListener('click', () => {
  const mobileLinks = document.getElementById('myLinks');
  if (mobileLinks.style.display === 'block') {
    mobileLinks.style.display = 'none';
  } else {
    mobileLinks.style.display = 'block';
  }
});