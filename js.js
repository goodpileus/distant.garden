// based on http://objectmix.com/javascript/37838-simple-sentence-generator-written-javascript.html

var array_list = {
    container: ["sack", "shovelful", "bowl", "box", "crock", "tub", "bag", "crate", "bucket", "truckload", "bunch", "vat", "pot", "collection", "barrel", "wheelbarrowful"]
    ,animal: ["gorilla", "aardvaark", "harp seal", "great white shark", "eel", "toad", "wombat", "bee", "beetle", "wasp", "whale", "blue whale", "shark", "lion", "dolphin", "elephant", "worm", "clam", "kitten", "lobster", "angel", "tiger", "leopard", "rabbit", "LARPer", "crocodile", "alligator"]
    ,adj1: ["certain", "special", "overwhelming", "bad", "laughable", "uncultured", "bizarre", "revolting", "stinking", "cranky", "insipid", "sick", "slimy", "awful", "grotesque", "smelly", "irrational", "unimpressive", "dreadful", "psychotic", "monotonous", "pathetic", "uneducated", "crude", "crooked", "witless", "indecent", "sickening", "drivelling", "illiterate", "offensive", "dimwitted", "deeply disturbing", "uncultured", "repulsive"]
    ,obj: ["clouds", "apocalypses", "circumstances", "bozos", "toe jam", "ear wax", "zit cheese", "considerations", "floods", "leprosy scabs", "puke lumps", "cow pies", "garbage", "clogs"]

    // 'main' is where it all begins.
    ,main: [
        "<span class='resting'>resting today</span> despite %adj1% %obj%...",
        "the %animal% is <span class='resting'>resting today</span>...",
        "resting with care today",
        "<img src='img/duck.jpg'>"
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
