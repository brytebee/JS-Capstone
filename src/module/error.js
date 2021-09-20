const errorMsg = document.getElementById('errorContainer');

const renderError = (msg) => {
  errorMsg.insertAdjacentText('beforeend', msg);
  errorMsg.style.opacity = 0;
};

export default renderError;