import { each } from "lodash";
import "./style.css";

// // // Render page by search result (v2.0)
// const searchLetter = async(e) => {
//   fetchMeals();
//   return e.key;
// };
// const input = document
//   .getElementById("input")
//   .addEventListener("keyup", searchLetter);
// // const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;

const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=c`;
const mealsHolder = document.getElementById("mealsHolder");
mealsHolder.className = "mealsHolder";
const recipeCount = document.getElementById('recipeCount');

const displayMeals = (list) => {
  recipeCount.innerText = `${ list.length}`
  list.forEach((meal) => {
    const mealCard = document.createElement("div");
    const mealImg = document.createElement("img");
    const mealTitle = document.createElement("h3");
    const mealRecipe = document.createElement("p");
    const mealLikes = document.createElement("p");
    const h3Wrapper = document.createElement("div");
    const mealLink = document.createElement("a");
    const recipe =
      meal.strInstructions.slice(0, 10) +
      (meal.strInstructions.length > 50 ? "..." : "");
    const mealVideoLink = document.createElement("a");

    mealImg.setAttribute("src", meal.strMealThumb);
    mealImg.setAttribute("alt", meal.strMeal);
    mealVideoLink.setAttribute("href", meal.strYoutube);
    mealLink.setAttribute("href", "#");

    mealImg.className = "meal-img";
    mealLikes.className = "meal-likes";
    h3Wrapper.className = "likes-display";
    mealLink.className = "icon-wrapper";
    mealCard.className = "mealCard";
    mealTitle.className = "meal-title";

    mealTitle.textContent = meal.strMeal;
    mealRecipe.textContent = recipe;
    mealVideoLink.textContent = `Youtube Video`;
    mealLink.innerHTML = '<i class="fas fa-heart"></i>';

    mealLink.addEventListener("click", () => sendLikes(meal));
    displayLikes(meal).then(data => mealLikes.innerHTML = data);

    h3Wrapper.append(mealTitle, mealLink);
    mealCard.append(mealImg, h3Wrapper, mealLikes, mealRecipe, mealVideoLink);
    mealsHolder.appendChild(mealCard);
  });
};

const fetchMeals = async () => {
  const request = (await fetch(baseUrl)).json();
  const response = await request;
  displayMeals(response.meals);
};

fetchMeals();

const sendLikes = async (meal) => {
  try {
    const baseUrl =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/likes/";

    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ item_id: meal.idMeal }),
    });
    if (!res.ok) throw new Error("Check your connection/input");
  } catch (err) {
    err.message;
  }
};

const displayLikes = async (meal) => {
  const baseUrl =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/likes/";
  try {
    const res = await fetch(baseUrl);
    if (!res.ok) throw new Error("No likes Found");
    const data = await res.json();
    let like = '0 like(s)';
    data.forEach((eachMeal) => {
        if (eachMeal.item_id === meal.idMeal) {
            like = (`${eachMeal.likes} like(s)`);
        }
    })
    return like
  } catch (err) {
    err.message;
  }
};
