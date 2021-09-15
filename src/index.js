import './style.css';

// // // Render page by search result (v2.0)
// const searchLetter = async(e) => {
//   fetchMeals();
//   return e.key;
// };
// const input = document
//   .getElementById('input')
//   .addEventListener('keyup', searchLetter);
// // const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;

const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=e`;
const mealsHolder = document.getElementById('mealsHolder');
mealsHolder.className = 'mealsHolder';

const displayMeals = (list) => {
  list.forEach((meal) => {
    const mealCard = document.createElement('div');
    const mealImg = document.createElement('img');
    const mealTitle = document.createElement('h3');
    const mealRecipe = document.createElement('p');
    const recipe =
      meal.strInstructions.slice(0, 50) +
      (meal.strInstructions.length > 50 ? '...' : '');
    const mealVideoLink = document.createElement('a');
    const commentButton = document.createElement('button');

    mealCard.className = 'mealCard';

    mealImg.setAttribute('src', meal.strMealThumb);
    mealImg.setAttribute('alt', meal.strMeal);
    mealImg.className = 'meal-img';

    mealTitle.textContent = meal.strMeal;
    mealTitle.className = 'meal-title';

    mealRecipe.textContent = recipe;

    mealVideoLink.setAttribute('href', meal.strYoutube);
    mealVideoLink.textContent = `Youtube Video`; //create a popup to play in-app rather that redirect (v2.0)

    commentButton.textContent = 'Comments';
    commentButton.addEventListener('click', () => commentPopUp(meal));

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

// // Add the popup to the enntire card (v2.0)
// const commentPopUp = (card) => {
//   card.addEventListener('click', () => {
//     const popup = open('', 'Popup', 'width=800,height=700');
//     popup.className = 'popup'; //class stying not working.
//     popup.document.body.appendChild(card);
//   });
// }

const commentPopUp = (meal) => {
  const mealCard = document.createElement('div');
  const mealImg = document.createElement('img');
  const mealTitle = document.createElement('h3');
  // const mealIgredient = document.createElement('div'); // Add meal ingredient (v2.0)
  const mealRecipe = document.createElement('div');
  const mealVideoLink = document.createElement('a');
  const commentButton = document.createElement('button');
  const form = document.createElement('form');
  const name = document.createElement('input');
  const comment = document.createElement('textarea');
  const linebreak = document.createElement('br');
  const mealId = meal.idMeal;
  const allComments = document.createElement('div');

  mealCard.className = 'mealCard';
  allComments.className = 'allComments';

  mealImg.setAttribute('src', meal.strMealThumb);
  mealImg.setAttribute('alt', meal.strMeal);
  mealImg.className = 'meal-img';

  mealTitle.textContent = meal.strMeal;
  mealTitle.className = 'meal-title';

  mealRecipe.innerHTML = meal.strInstructions;
  mealRecipe.className = 'recipe';

  mealVideoLink.setAttribute('href', meal.strYoutube);
  mealVideoLink.textContent = 'Youtube Video'; //create a popup to play in-app rather that redirect (v2.0)

  commentButton.textContent = 'Comments';
  
  form.setAttribute('method', 'post');
  
  name.setAttribute('type', 'text');
  name.id = 'username';
  name.setAttribute('placeholder', 'Your name');
  
  comment.setAttribute( 'name', 'comment');
  comment.setAttribute( 'rows', '10');
  comment.setAttribute( 'cols', '80');
  comment.setAttribute( 'placeholder', 'Your Comment...');
  
  form.innerText = 'Add a comment';
  form.className = 'comment-form';
  form.append(linebreak, name, linebreak, comment, linebreak);
  commentButton.addEventListener('click', () => makeComment(name, comment, mealId));
  allComments.innerHTML = showAllComments(mealId, mealCard);
  
  mealCard.append(
    mealImg,
    mealTitle,
    mealRecipe,
    mealVideoLink,
    form,
    commentButton,
  );
  const popup = open('', 'Popup', 'width=800,height=700');
  popup.document.body.appendChild(mealCard);
};

const makeComment = async (username, userComment, id) => {
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/comments/';
  username = username.value;
  userComment = userComment.value;
  if (username !== '' && userComment !== '') {
    const newComment = {
      item_id: id,
      username: username,
      comment: userComment,
    };
  
    (await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newComment),
    })).json();
  
    username = '';
    userComment = '';
  }
};

const showAllComments = async (mealId, mealCard) => {
  const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/comments?item_id=${mealId}`;

  const request = (await fetch(baseUrl)).json();
  const response = await request;
  const data = await response;
  
  if (data.length > 0) {
    const commentCount = document.createElement('h2');
    commentCount.textContent = `Comments (${data.length})`;
    mealCard.append(commentCount);

    data.forEach((comment) => {
      const commentDate = document.createElement('span');
      const commentUsername = document.createElement('span');
      const commentBody = document.createElement('span');

      commentDate.textContent = comment.creation_date;
      commentUsername.textContent = comment.username;
      commentBody.textContent = comment.comment;
      mealCard.append(commentDate, commentUsername, commentBody);
    });
  }
};