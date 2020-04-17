var array_list = {
    // 'main' is where it all begins.
    main: [
        "<img src='img/laurel/duck.jpg'>",
        "<img src='img/laurel/frog.jpg'>"
    ]
}

function getRandomEntry(arrayName) {
    var ary = array_list[arrayName];
    if (!ary) return '%' + arrayName + '%';

    var entry = ary[Math.floor(ary.length * Math.random())];
    entry = entry.replace(/%([^%]+)%/g, function (m) {
        var aname = m.replace(/^%|%$/g,'');
        return getRandomEntry(aname);
    });
    return entry;
}


document.getElementById("laurel-img").innerHTML = [
  getRandomEntry("main")
];

function newPhrase() {
  document.getElementById("laurel-img").innerHTML = [
    getRandomEntry("main")
  ];
}


function newBg() {
  var randomColor = '#'+ ('474747' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

  $('.split1').css({
    'background' : randomColor,
  });
}

function newBg2() {
  var randomColor = '#'+ ('474747' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);


  $('.split2').css({
    'background' : randomColor,
  });

  $('body').css({
    'background' : randomColor,
  });
}

function newBg3() {
  var randomColor = '#'+ ('474747' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);


  $('body').css({
    'background' : randomColor,
  });
}

var interval = setInterval(timer, 20000);

function timer() {
  newBg();
  newBg2();
  // newBg3();
}

function getContextHeight() {
  if( $(".mobile-check").css('display') == 'none') {
    $('.main-wrap').css({
    'margin-bottom' : $(".context").height() + 16,
    });
  } else {
    $('.main-wrap').css({
    'margin-bottom' : '1rem',
    });
  }
}

$(".split-hover").hover(function(){
  $(this).parent().toggleClass('hover');
  }, function(){
  $(this).parent().toggleClass('hover');
});

$(".split-hover-mobile").hover(function(){
  $(this).toggleClass('hover');
  }, function(){
  $(this).toggleClass('hover');
});

window.onload = function() {
  console.log(':-)');

  document.body.style.opacity = "1";
  $('.context').css({'opacity' : '1',});
  newBg();
  newBg2();
  // newBg3();
  getContextHeight();

}

$( window ).resize(function() {
  getContextHeight();
});

// $(".note").html("context height: " + $(".context").height());
