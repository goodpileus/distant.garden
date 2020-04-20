// LAUREL RANDOM IMG
// --------------------------------------------------
var array_list = {
    main: [
        "<img src='img/laurel/duck.jpg'>",
        "<img src='img/laurel/frog.jpg'>",
        "<img src='img/laurel/lizard.jpg'>",
        "<img src='img/laurel/spiral.jpg'>",
        "<img src='img/laurel/bug.jpg'>"
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


// SAKI RANDOM IMG
// --------------------------------------------------
var array_list = {
    main: [
        "<img src='img/saki/faka.png'>",
        "<img src='img/saki/mapfumo.png'>",
        "<img src='img/saki/mtukudzi.png'>",
        "<img src='img/saki/potatoblock.png'>",
        "<img src='img/saki/sunra.png'>",
        "<img src='img/saki/bmw.png'>"
    ]
}

function getRandomEntry2(arrayName) {
    var ary = array_list[arrayName];
    if (!ary) return '%' + arrayName + '%';

    var entry = ary[Math.floor(ary.length * Math.random())];
    entry = entry.replace(/%([^%]+)%/g, function (m) {
        var aname = m.replace(/^%|%$/g,'');
        return getRandomEntry2(aname);
    });
    return entry;
}


document.getElementById("saki-img").innerHTML = [
  getRandomEntry2("main")
];

function newPhrase2() {
  document.getElementById("saki-img").innerHTML = [
    getRandomEntry2("main")
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

  // $('body').css({
  //   'background' : randomColor,
  // });
}

var interval = setInterval(timer, 20000);

function timer() {
  // newBg();
  newBg2();
  // newBg3();
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
  // newBg();
  newBg2();
  // newBg3();
  // getContextHeight();

}

$( window ).resize(function() {
  // getContextHeight();
});

// $(".note").html("context height: " + $(".context").height());
