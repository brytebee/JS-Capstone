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
    const mealImg = document.createElement("img");
    const mealTitle = document.createElement("h3");
    const mealRecipe = document.createElement("p");
    const recipe =
    meal.strInstructions.slice(0, 200) +
    (meal.strInstructions.length > 200 ? "..." : "");
    const mealVideoLink = document.createElement("a");
    
    mealCard.className = "mealCard";

    mealImg.setAttribute("src", meal.strMealThumb);
    mealImg.setAttribute("alt", meal.strMeal);
    mealImg.className = "meal-img";

    mealTitle.textContent = `${meal.strMeal}`;
    mealTitle.className = "meal-title";

    mealRecipe.textContent = recipe;

    mealVideoLink.setAttribute('href', meal.strYoutube);
    mealVideoLink.textContent = `Youtube Video`;

    mealCard.append(mealImg, mealTitle, mealRecipe, mealVideoLink);
    mealsHolder.appendChild(mealCard);
  });
};

const fetchMeals = async () => {
  const request = (await fetch(baseUrl)).json();
  const response = await request;
  response.meals.forEach((meal) =>
    console.log(
      meal.strMeal,
      meal.strYoutube
    )
  );
  displayMeals(response.meals);
};

fetchMeals();
