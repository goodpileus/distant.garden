function newBg() {
  var randomColor = '#'+ ('474747' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

  $('body').css({
    'background' : randomColor,
  });

  $('.main-wrap').css({
    'background' : randomColor,
  });
}

var interval = setInterval(timer, 20000);

function timer() {
  newBg();
}


window.onload = function() {
  console.log(':-)');

  document.body.style.opacity = "1";
  newBg();
}
