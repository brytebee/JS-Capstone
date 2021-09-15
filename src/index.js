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

const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=e`;
const mealsHolder = document.getElementById("mealsHolder");
mealsHolder.className = "mealsHolder";

const displayMeals = (list) => {
  list.forEach((meal) => {
    const mealCard = document.createElement("div");
    const mealImg = document.createElement("img");
    const mealTitle = document.createElement("h3");
    const mealRecipe = document.createElement("p");
    const recipe =
      meal.strInstructions.slice(0, 50) +
      (meal.strInstructions.length > 50 ? "..." : "");
    const mealVideoLink = document.createElement("a");
    const commentButton = document.createElement("button");

    mealCard.className = "mealCard";

    mealImg.setAttribute("src", meal.strMealThumb);
    mealImg.setAttribute("alt", meal.strMeal);
    mealImg.className = "meal-img";

    mealTitle.textContent = meal.strMeal;
    mealTitle.className = "meal-title";

    mealRecipe.textContent = recipe;

    mealVideoLink.setAttribute("href", meal.strYoutube);
    mealVideoLink.textContent = `Youtube Video`; //create a popup to play in-app rather that redirect (v2.0)

    commentButton.textContent = "Comments";
    commentButton.addEventListener("click", () => commentPopUp(meal));

    // mealCard.append(mealImg, mealTitle, mealRecipe, mealVideoLink, commentButton);
    mealCard.append(mealImg, mealTitle, mealRecipe, commentButton);
    // commentPopUp(mealCard);
    mealsHolder.appendChild(mealCard);
  });
};

const fetchMeals = async () => {
  const request = (await fetch(baseUrl)).json();
  const response = await request;
  displayMeals(response.meals);
};

fetchMeals();

// // Add the popup to the enntire card 
// const commentPopUp = (card) => {
//   card.addEventListener('click', () => {
//     const popup = open('', 'Popup', 'width=800,height=700');
//     popup.className = 'popup'; //class stying not working.
//     popup.document.body.appendChild(card);
//   });
// }


const commentPopUp = (meal) => {
  const mealCard = document.createElement("div");
  const mealImg = document.createElement("img");
  const mealTitle = document.createElement("h3");
  const mealRecipe = document.createElement("p");
  const mealVideoLink = document.createElement("a");
  const commentButton = document.createElement("button");
  
  mealCard.className = "mealCard";

  mealImg.setAttribute("src", meal.strMealThumb);
  mealImg.setAttribute("alt", meal.strMeal);
  mealImg.className = "meal-img";

  mealTitle.textContent = meal.strMeal;
  mealTitle.className = "meal-title";

  mealRecipe.textContent = meal.strInstructions;

  mealVideoLink.setAttribute("href", meal.strYoutube);
  mealVideoLink.textContent = `Youtube Video`; //create a popup to play in-app rather that redirect (v2.0)

  commentButton.textContent = "Comments";
  commentButton.className = 'show btn';
  mealCard.append(
    mealImg,
    mealTitle,
    mealRecipe,
    mealVideoLink,
    commentButton
  );
  const popup = open("", "Popup", "width=800,height=700");
  popup.document.body.appendChild(mealCard);
};