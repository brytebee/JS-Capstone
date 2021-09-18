import renderError from "./error";
import commentPopUp from './comment.js';
import {
  sendLikes,
displayLikes,
} from './likes.js';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
const mealsHolder = document.getElementById('mealsHolder');
const recipeCount = document.getElementById('recipeCount');
mealsHolder.className = 'mealsHolder';

const displayMeals = (list) => {
  recipeCount.innerText = `${list.length}`;
  list.forEach((meal) => {
    const mealCard = document.createElement('div');
    const mealImg = document.createElement('img');
    const mealTitle = document.createElement('h3');
    const mealRecipe = document.createElement('p');
    const mealVideoLink = document.createElement('a');
    const commentButton = document.createElement('button');
    const mealLikes = document.createElement('p');
    const h3Wrapper = document.createElement('div');
    const mealLink = document.createElement('a');
    const recipe = meal.strInstructions;

    mealImg.setAttribute('src', meal.strMealThumb);
    mealImg.setAttribute('alt', meal.strMeal);
    mealVideoLink.setAttribute('href', meal.strYoutube);

    mealImg.className = 'meal-img';
    mealLikes.className = 'meal-likes';
    h3Wrapper.className = 'likes-display';
    mealLink.className = 'icon-wrapper';
    mealCard.className = 'mealCard';
    mealTitle.className = 'meal-title';
    mealRecipe.className = 'meal-recipe';
    commentButton.className = 'comment';

    mealTitle.textContent = `${meal.strMeal.slice(0, 15)} ...`;
    mealRecipe.textContent = recipe;
    mealVideoLink.textContent = 'Youtube Video'; // create a popup to play in-app rather that redirect (v2.0)
    commentButton.textContent = 'Comments';
    mealLink.innerHTML = '<i class="fas fa-heart"></i>';

    commentButton.addEventListener('click', () => commentPopUp(meal));
    displayLikes(meal).then((data) => { mealLikes.innerHTML = data; });
    mealLink.addEventListener('click', () => {
      sendLikes(meal).then(() => {
        displayLikes(meal).then((data) => { mealLikes.innerHTML = data; });
      });
    });

    h3Wrapper.append(mealTitle, mealLink);
    mealCard.append(mealImg, h3Wrapper, mealLikes, mealRecipe, commentButton);
    mealsHolder.appendChild(mealCard);
  });
};

const fetchMeals = async () => {
  try {
    const request = await fetch(baseUrl);

    if (!request.ok) throw new Error('Something went wrong. Try again');
    const response = await request.json();
    displayMeals(response.meals);
  } catch (err) { renderError(err.message); }
};

export default fetchMeals;