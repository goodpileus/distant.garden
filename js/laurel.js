// based on http://objectmix.com/javascript/37838-simple-sentence-generator-written-javascript.html

var array_list = {
    animal: ["gorilla", "aardvaark", "harp seal", "eel", "toad", "wombat", "bee", "beetle", "wasp", "orca", "blue whale", "shark", "lion", "dolphin", "elephant", "worm", "clam", "kitten", "angel", "tiger", "leopard", "rabbit", "LARPer", "crocodile", "alligator", "marxist"]
    ,imprint: ["relaxation", "something", "an echo", "silence", "a window at night"]
    ,obj: ["certain weather patterns", "certain apocalypses", "certain circumstances", "certain burdens", "certain catastrophes", "psychic despair", "tragic futility"]
    ,sound: ["a tree growing", "the setting sun", "my eyes staring at a screen", "surrender"]
    ,weight: ["the atmosphere", "the academy"]

    // 'main' is where it all begins.
    ,main: [
        // "<span class='resting'>Resting today</span> despite %adj1% %obj%.",
        "<span class='resting'>Resting today</span> despite %obj%.",
        "The %animal% is <span class='resting'>resting today</span>.",
        "The weight of %weight% lifts a little.",
        "The imprint of %imprint%.",
        "The sound of %sound%.",
        "<img src='img/duck.jpg'>",
        "<img src='img/frog.jpg'>"
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


document.getElementById("sentence").innerHTML = [
  getRandomEntry("main")
];

function newPhrase() {
  document.getElementById("sentence").innerHTML = [
    getRandomEntry("main")
  ];
}

function newBg() {
  var randomColor = '#'+ ('474747' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

  $('body').css({
    'background' : randomColor,
  });
}

var interval = setInterval(timer, 20000);

function timer() {
  newPhrase();
  newBg();
}

window.onload = function() {
  console.log(':-)');

  document.body.style.opacity = "1";
  newBg();
}

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
