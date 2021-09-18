import renderError from "./error";

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/likes/';


const sendLikes = async (meal) => {
  try {

    await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ item_id: meal.idMeal }),
    });
  } catch (err) {
    renderError(err.message);
  }
};

const displayLikes = async (meal) => {
  let like = '0 like(s)';
  try {
    const res = await fetch(baseUrl);
    const data = await res.json();
    data.forEach((eachMeal) => {
      if (eachMeal.item_id === meal.idMeal) {
        like = (`${eachMeal.likes} like(s)`);
      }
    });
  } catch (err) {
    renderError(er.message);
  }
  return like;
};

export {
  sendLikes,
displayLikes,
};