import renderError from './error.js';

const makeComment = async (username, userComment, id) => {
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/comments/';
  try {
    username = username.value;
    userComment = userComment.value;
    if (username !== '' && userComment !== '') {
      const newComment = {
        item_id: id,
        username,
        comment: userComment,
      };

      await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });
    }
    username = '';
    userComment = '';
  } catch (err) {
    renderError(err.message);
  }
};

const showAllComments = async (mealId) => {
  const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/comments?item_id=${mealId}`;
  let data;

  try {
    const request = await fetch(baseUrl);
    const response = await request.json();
    data = await response;
  } catch (err) {
    renderError(err.message);
  }
  return data;
};

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
  const allComments = document.createElement('ul');
  const commentButton = document.createElement('button');
  const modal = document.getElementById('myModal');
  const modalContent = document.getElementById('modal-content');
  const formHeader = document.createElement('h3');
  const commentHeader = document.createElement('h3');

  mealCard.className = 'mealCard';
  mealCard.id = 'popMealCard';
  allComments.className = 'allComments';

  mealImg.setAttribute('src', meal.strMealThumb);
  mealImg.setAttribute('alt', meal.strMeal);
  mealImg.className = 'meal-img';

  mealTitle.textContent = meal.strMeal;
  mealTitle.className = 'meal-title';
  mealTitle.id = 'meal-title';
  mealVideoLink.id = 'video-link';

  mealRecipe.innerHTML = meal.strInstructions;
  mealRecipe.className = 'recipe';
  mealRecipe.id = 'popup-meal-recipe';

  mealVideoLink.setAttribute('href', meal.strYoutube);
  mealVideoLink.textContent = 'Youtube Video'; // create a popup to play in-app rather that redirect (v2.0)

  commentButton.textContent = 'Comments';
  commentButton.className = 'comment';

  form.setAttribute('method', 'post');
  form.id = 'popup-form';
  name.setAttribute('type', 'text');
  name.id = 'username';
  name.setAttribute('placeholder', 'Your name');

  comment.setAttribute('name', 'comment');
  comment.setAttribute('rows', '10');
  comment.setAttribute('cols', '60');
  comment.setAttribute('placeholder', 'Your Comment...');

  formHeader.innerText = 'Add a comment';
  form.className = 'comment-form';
  formHeader.className = 'formHeader';
  form.append(name, linebreak, comment, linebreak);

  showAllComments(mealId).then((data) => {
    if (data.message === `${mealId} not found.` || data.message === 'item_id\' not found.') {
      commentHeader.innerText = 'This Recipe has no comments yet!\nAdd some comments!';
    } else {
      commentHeader.innerText = `Comments (${data.length})`;
      data.forEach((comm) => {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.margin = '0 32px';
        li.style.color = 'darkbrown';
        li.append(`${comm.creation_date} ${comm.username} ${comm.comment}`);
        allComments.append(li);
      });
    }
  });

  commentButton.addEventListener('click', () => {
    makeComment(name, comment, mealId);
    showAllComments(mealId).then((data) => {
      if (data.length === `${mealId} not found.` || data.message === 'item_id\' not found.') {
        commentHeader.innerText = 'This Recipe has no comments yet!\nAdd some comments!';
      } else {
        commentHeader.innerText = `Comments (${data.length})`;
        data.forEach((comm) => {
          const li = document.createElement('li');
          li.style.listStyle = 'none';
          li.style.margin = '0 32px';
          li.style.color = 'darkbrown';
          li.append(`${comm.creation_date} ${comm.username} ${comm.comment}`);
          allComments.append(li);
        });
      }
    });
  });

  mealCard.append(
    mealImg,
    mealTitle,
    mealRecipe,
    mealVideoLink,
    commentHeader,
    // li,
    allComments,
    formHeader,
    form,
    commentButton,
  );

  modalContent.append(mealCard);

  modal.style.display = 'block';

  document.getElementsByClassName('close')[0].addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.removeChild(mealCard);
  });

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      modalContent.removeChild(mealCard);
    }
  };
};

export default commentPopUp;