$(document).ready(function() {
    
 
    var computerPick = Math.floor(Math.random() * (121 - 19)) + 19;
    console.log(computerPick);
    $("#computer-pick").text(computerPick);
 
    var purple = Math.floor(Math.random() * (13-1)) +1;
    var white = Math.floor(Math.random() * (13-1)) +1;
    var green = Math.floor(Math.random() * (13-1)) +1;
    var black = Math.floor(Math.random() * (13-1)) +1;
    console.log("Your Pick: " + purple + white + green + black);

    var userTotal =0;
    var wins =0;
    var losses =0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function reset() {

        computerPick = Math.floor(Math.random() * (121 - 19)) + 19;
        $("#computer-pick").text(computerPick);
        var purple = Math.floor(Math.random() * (13-1)) +1;
        var white = Math.floor(Math.random() * (13-1)) +1;
        var green = Math.floor(Math.random() * (13-1)) +1;
        var black = Math.floor(Math.random() * (13-1)) +1;

        userTotal = 0;
        $("your-score").text(userTotal);
        }

    function winner() {
        $("#your-score").html("You won!");
        wins++;
        $('#wins').text(wins);
        reset();
        }

    function loser() {
        $("#your-score").html("You lost!");
        losses++;
        $('#losses').text(losses);
        reset();
        }

    $("#button-1").on("click", function() {
        userTotal = userTotal + purple;
        $("#your-score").text(userTotal);

        if (userTotal === computerPick) {
            winner();
        } else if (userTotal > computerPick) {
            loser();
        }
    })  

    $("#button-2").on("click", function() {
        userTotal = userTotal + white;
        $("#your-score").text(userTotal);

        if (userTotal === computerPick) {
            winner();
        } else if (userTotal > computerPick) {
            loser();
        }
    })  

    $("#button-3").on("click", function() {
        userTotal = userTotal + green;
        $("#your-score").text(userTotal);

        if (userTotal === computerPick) {
            winner();
        } else if (userTotal > computerPick) {
            loser();
        }
    })  

    $("#button-4").on("click", function() {
        userTotal = userTotal + black;
        $("#your-score").text(userTotal);

        if (userTotal === computerPick) {
            winner();
        } else if (userTotal > computerPick) {
            loser();
        }
    })  
});
