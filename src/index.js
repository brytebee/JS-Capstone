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

const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
const mealsHolder = document.getElementById("mealsHolder");
mealsHolder.className = "mealsHolder";

const displayMeals = (list) => {
  list.forEach((meal) => {
    const mealCard = document.createElement("div");
    const likeIcon = document.createElement("i");
    const mealImg = document.createElement("img");
    const mealTitle = document.createElement("h3");
    const mealRecipe = document.createElement("p");
    let mealLikes = document.createElement("span");
    const h3Wrapper = document.createElement("div");
    const recipe =
    meal.strInstructions.slice(0, 10) +
    (meal.strInstructions.length > 50 ? "..." : "");
    const mealVideoLink = document.createElement("a");
    
    mealCard.className = "mealCard";

    mealImg.setAttribute("src", meal.strMealThumb);
    mealImg.setAttribute("alt", meal.strMeal);
    mealImg.className = "meal-img";

    mealTitle.textContent = meal.strMeal;
    mealTitle.className = "meal-title";

    mealRecipe.textContent = recipe;

    mealVideoLink.setAttribute('href', meal.strYoutube);
    mealVideoLink.textContent = `Youtube Video`;
    mealLikes.innerText = '0 Likes';
    mealLikes.className = "meal-likes";
    likeIcon.className = "fas fa-heart";
    h3Wrapper.className = "likes-display";
    h3Wrapper.append(mealTitle, likeIcon);
    mealCard.append(mealImg,h3Wrapper, mealLikes, mealRecipe, mealVideoLink);
    mealsHolder.appendChild(mealCard);
  });
};

const fetchMeals = async () => {
  const request = (await fetch(baseUrl)).json();
  const response = await request;
  displayMeals(response.meals);
};

fetchMeals();

fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/likes/')
.then(res => res.json())
.then(data => console.log(data))