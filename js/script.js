let counterX = 0;
let counterO = 0;
let text = "x";
let win = [10, 26, 31, 33, 36, 41, 59];

function win(value, array){
    if ($.inArray(counterX, win) != -1){
        
    }
}

function performLogic(button, tile){
    $(button).hide();
    $(tile).text(text);
}
function cycle(number) {
    if (text === "o") {
        text = "x";
        counterO = counterO + number;
    } else if (text === "x") {
        text = "o";
        counterX = counterX + number;
    }
}

function consoleLog(){
    console.log(counterO);
    console.log(counterX);
    console.log(text);
}

$("#button1").click(function() {
    cycle(2);
    performLogic("#button1","#tile1");
    consoleLog();
    win();
});

$("#button2").click(function() {
    cycle(3);
    performLogic("#button2","#tile2");
    consoleLog();
    win();
});

$("#button3").click(function() {
    cycle(5);
    performLogic("#button3","#tile3");
    consoleLog();
});

$("#button4").click(function() {
    cycle(7);
    performLogic("#button4","#tile4");
    consoleLog();
});

$("#button5").click(function() {
    cycle(11);
    performLogic("#button5","#tile5");
    consoleLog();
});

$("#button6").click(function() {
    cycle(13);
    performLogic("#button6","#tile6");
    consoleLog();
});

$("#button7").click(function() {
    cycle(17);
    performLogic("#button7","#tile7");
    consoleLog();
});

$("#button8").click(function() {
    cycle(19);
    performLogic("#button8","#tile8");
    consoleLog();
});

$("#button9").click(function() {
    cycle(23);
    performLogic("#button9","#tile9");
    consoleLog();
});
