function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  var target = document.querySelector('.target, #nested');
  return target;
}
