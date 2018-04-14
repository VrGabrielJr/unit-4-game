$( document ).ready(function() {
    GameStart();

    $("button").click(function (){
        var tempVarNum = parseInt(this.value);
        totalScore += tempVarNum;
        console.log(tempVarNum);
        $("#totalValue").text(totalScore);
        Check();
    })
});
    
    //Delcare game variables (gem1-gem4 , win , lost, currentScore, GoalScore)
    $("#gem1").attr("value", Math.floor(Math.random() * 12 + 1) + 1);
    $("#gem2").attr("value", Math.floor(Math.random() * 12 + 1) + 1);
    $("#gem3").attr("value", Math.floor(Math.random() * 12 + 1) + 1);
    $("#gem4").attr("value", Math.floor(Math.random() * 12 + 1) + 1);
    var startRanNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    var win = 0;
    var lose = 0;
    var totalScore = 0;
    
    function GameStart() {
        //Display All stats to DOM
        startRanNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        totalScore = 0;
        $("#startValue").text(startRanNum);
        $("#wins").text("Wins: " + win);
        $("#lose").text("Lose: " + lose);
        $("#totalScore").text("Your Total Score is: ");
        $("#totalValue").text(0);
    }

    function Check() {
        if (totalScore === startRanNum) {
            win++;
            $("#wins").text("Wins: " + win);
            $("totalValue").text("YOU WIN!");
            GameStart();
        } 
        
        if (totalScore > startRanNum) {
            lose++;
            $("#lose").text("Lose: " + lose);
            $("totalValue").text("YOU LOSE!");
            GameStart();
        }
    };


