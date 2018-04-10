// variables
// variable for player random starting number 19-120
var startRanNum;
//variable per button. Also random 1-12 possible function
var gem1Num;
var gem2Num;
var gem3Num;
var gem4Num;
// Win and Lose Variables
var win;
var lose;
//total score variable
var totalScore;

function Random () {
    gem1Num = Math.floor(Math.random() * 12 + 1) + 1;
    gem2Num = Math.floor(Math.random() * 12 + 1) + 1;
    gem3Num = Math.floor(Math.random() * 12 + 1) + 1;
    gem4Num = Math.floor(Math.random() * 12 + 1) + 1;
    startRanNum = Math.floor(Math.random() * 120 + 1) + 19;

    console.log(gem1Num);
    console.log(gem2Num);
    console.log(gem3Num);
    console.log(gem4Num);
    console.log(startRanNum);
}
Random();

$("#gem1").click (function () {
    console.log(gem1Num);
});

$("#gem2").click (function () {
    console.log(gem2Num);
});

$("#gem3").click (function () {
    console.log(gem3Num);
});

$("#gem4").click (function () {
    console.log(gem4Num);
});


