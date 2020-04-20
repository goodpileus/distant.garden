function newBg() {
  var randomColor = '#'+ ('474747' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

  $('body').css({
    'background' : randomColor,
  });

  $('.main-wrap').css({
    'background' : randomColor,
  });
}

function newBg2() {
  var randomColor = '#'+ ('474747' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

  $('.back-btn').css({
    'background' : randomColor,
  });
}

var interval = setInterval(timer, 20000);

function timer() {
  newBg();
  newBg2();
}


window.onload = function() {
  console.log(':-)');

  document.body.style.opacity = "1";
  newBg();
  newBg2();
}
