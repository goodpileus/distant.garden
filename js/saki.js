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

  $('.main-wrap').css({
    'background' : randomColor,
  });
}

function newBg3() {
  var randomColor = '#'+ ('474747' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

  $('.back-btn').css({
    'background' : randomColor,
  });
}

var interval = setInterval(timer, 20000);

function timer() {
  // newPhrase();
  // newBg();
  // newBg2();
  // newBg3();
}


window.onload = function() {
  console.log(':-)');

  document.body.style.opacity = "1";
  $('.context').css({'opacity' : '1',});
  // newBg();
  // newBg2();
  // newBg3();
  // getContextHeight();
}

// function getContextHeight() {
//   if( $(".mobile-check").css('display') == 'none') {
//     $('.main-wrap').css({
//     'margin-bottom' : $(".context").height() + 16,
//     });
//   } else {
//     $('.main-wrap').css({
//     'margin-bottom' : '1rem',
//     });
//   }
// }

// $( window ).resize(function() {
//   getContextHeight();
// });

// function timer2() {
//   $('#sentence').css({
//     'opacity' : '0',
//   });
// }
//
// function timer3() {
//   $('#sentence').css({
//     'opacity' : '1',
//   });
// }

// window.showOutput = function() {
//     document.getElementsByTagName("body")[0].innerHTML = [
//         getRandomEntry("main")
//     ].join('');
// }

// window.showOutput();

// $(document).ready(function(){
//
//   animateDiv();
//   animateDiv2();
//
// });
//
// function makeNewPosition(){
//
//   // Get viewport dimensions (remove the dimension of the div)
//   var h = $(window).height() - 50;
//   var w = $(window).width() - 50;
//
//   var nh = Math.floor(Math.random() * h);
//   var nw = Math.floor(Math.random() * w);
//
//   return [nh,nw];
//
// }
//
// function animateDiv(){
//   var newq = makeNewPosition();
//   var oldq = $('.drifter').offset();
//   var speed = calcSpeed([oldq.top, oldq.left], newq);
//
//   $('.drifter').animate({ top: newq[0], left: newq[1] }, speed, function(){
//     animateDiv();
//   });
// }
//
// function calcSpeed(prev, next) {
//
//   var x = Math.abs(prev[1] - next[1]);
//   var y = Math.abs(prev[0] - next[0]);
//
//   var greatest = x > y ? x : y;
//
//   var speedModifier = 0.02;
//
//   var speed = Math.ceil(greatest/speedModifier);
//
//   return speed;
//
// }

$(document).ready(function(){
    randomPosition('.a');
    randomPosition2('.b');
    randomPosition('.c');
    randomPosition2('.d');
    randomPosition('.e');
    randomPosition2('.f');
    randomPosition('.spiral1');
    randomPosition2('.spiral2');
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
    animateDiv('.f');
});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 40000,   function(){
      animateDiv(myclass);
    });
};

function randomPosition(myclass){
    var randomW = Math.floor(80*Math.random());
    var randomH = Math.floor(80*Math.random());
    $(myclass).css({'top' : randomH + '%'});
    $(myclass).css({'left' : randomW + '%'});
};

function randomPosition2(myclass){
    var randomW = Math.floor(80*Math.random());
    var randomH = Math.floor(80*Math.random());
    $(myclass).css({'bottom' : randomH + '%'});
    $(myclass).css({'right' : randomW + '%'});
};
