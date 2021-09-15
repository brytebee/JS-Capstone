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

export { displayMeals };