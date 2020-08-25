function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  document.querySelector('#nested .target');
}
