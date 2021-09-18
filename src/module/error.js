const errorMsg = document.getElementById('errorContainer');

const renderError = function (msg) {
  errorMsg.insertAdjacentText('beforeend', msg);
  errorMsg.style.opacity = 0;
};

export default renderError;