import { implementation } from 'array.prototype.flat';
import './style.css';

// // Render page by search result (v2.0)
// const searchLetter = async(e) => {
//   fetchMeals();
//   return e.key;
// };
// const input = document
//   .getElementById('input')
//   .addEventListener('keyup', searchLetter);
// // const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;

const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`;
const mealsHolder = document.getElementById('mealsHolder');
const errorMsg = document.getElementById('errorContainer');
const recipeCount = document.getElementById('recipeCount');
mealsHolder.className = 'mealsHolder';

const renderError = function (msg) {
  errorMsg.insertAdjacentText('beforeend', msg);
  errorMsg.style.opacity = 0;
};

const displayMeals = (list) => {
  recipeCount.innerText = `${ list.length}`
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
    const mealLikes = document.createElement("p");
    const h3Wrapper = document.createElement("div");
    const mealLink = document.createElement("a");

    mealTitle.textContent = meal.strMeal;

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
    mealVideoLink.textContent = `Youtube Video`; //create a popup to play in-app rather that redirect (v2.0)
    commentButton.textContent = 'Comments';
    mealLink.innerHTML = '<i class="fas fa-heart"></i>';

    commentButton.addEventListener('click', () => commentPopUp(meal));
    mealLink.addEventListener("click", () => sendLikes(meal));
    
    displayLikes(meal).then(data => mealLikes.innerHTML = data);
    
    h3Wrapper.append(mealTitle, mealLink);
    mealCard.append(mealImg, h3Wrapper, mealLikes, mealRecipe, commentButton, mealVideoLink);
    mealsHolder.appendChild(mealCard);
  });
};

const fetchMeals = async () => {
  try {
    const request = await fetch(baseUrl);
    
    if (!request.ok) throw new Error('Something went wrong. Try again');
    const response = await request.json();
    displayMeals(response.meals);
  } catch(err) {renderError(err.message);}
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

const commentPopUp = async (meal) => {
  const mealCard = document.createElement('div');
  const mealImg = document.createElement('img');
  const mealTitle = document.createElement('h3');
  // const mealIgredient = document.createElement('div'); // Add meal ingredient (v2.0)
  const mealRecipe = document.createElement('div');
  const mealVideoLink = document.createElement('a');
  const form = document.createElement('form');
  const name = document.createElement('input');
  const comment = document.createElement('textarea');
  const linebreak = document.createElement('br');
  const mealId = meal.idMeal;
  const allComments = document.createElement('div');
  const commentButton = document.createElement('button');
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById('modal-content');

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
  showAllComments(mealId, mealCard).then(data => allComments.innerHTML = data);

  mealCard.append(
    mealImg,
    mealTitle,
    mealRecipe,
    mealVideoLink,
    allComments,
    form,
    commentButton,
  );

  modalContent.append(mealCard);
  
  modal.style.display = "block";

  document.getElementsByClassName("close")[0].addEventListener('click', () => {
    modal.style.display = "none";
    modalContent.removeChild(mealCard);
  })
    
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};

const makeComment = async (username, userComment, id) => {
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/comments/';
  try {
    username = username.value;
    userComment = userComment.value;
    if (username !== '' && userComment !== '') {
      const newComment = {
        item_id: id,
        username: username,
        comment: userComment,
      };
    
      await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newComment),
      })
      if (!response.ok) {throw new Error('Check input or network')}

      username = '';
      userComment = '';
    }
  } catch(err) {
    renderError(err.message);
  }
};

const showAllComments = async (mealId, mealCard) => {
  const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/comments?item_id=${mealId}`;

  try {
    const request = await fetch(baseUrl);
    if (!request.ok) throw new Error('Problems loading comments. Refresh network or page');
    const response = await request.json();
    const data = await response;
    
    if (data.length > 0) {
      const commentCount = document.createElement('h2');
      commentCount.textContent = `Comments (${data.length})`;
      let returnContainer = [commentCount.innerText];

      data.forEach((comment) => {
        const commentDate = document.createElement('span');
        const commentUsername = document.createElement('span');
        const commentBody = document.createElement('span');
        
        returnContainer.push(commentDate.textContent = comment.creation_date);
        returnContainer.push(commentUsername.textContent = comment.username);
        returnContainer.push(commentBody.textContent = comment.comment);
      });
      return (returnContainer);
    }
  } catch(err) {
    renderError(err.message);
  }
};

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
