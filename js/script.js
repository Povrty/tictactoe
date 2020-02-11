let counterX = "";
let counterO = "";
let text = "x";
let win = [10, 26, 27, 31, 33, 36, 41, 43, 49, 58, 59, 61, 64];

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
function winner(variable) {
    if (win.includes(variable)) {
        console.log("true");
        alert(text + " is the Winner!")
        location.reload();
    } else {
        console.log("false");
    }
}

$(".restart").click(function() {
    location.reload();
})

$("#button1").click(function() {
    cycle("1");
    performLogic("#button1","#tile1");
    consoleLog();
    winner(counterX);
    winner(counterO);
});

$("#button2").click(function() {
    cycle("2");
    performLogic("#button2","#tile2");
    consoleLog();
    winner(counterX);
    winner(counterO);
});

$("#button3").click(function() {
    cycle("3");
    performLogic("#button3","#tile3");
    consoleLog();
    winner(counterX);
    winner(counterO);
});

$("#button4").click(function() {
    cycle("4");
    performLogic("#button4","#tile4");
    consoleLog();
    winner(counterX);
    winner(counterO);
});

$("#button5").click(function() {
    cycle("5");
    performLogic("#button5","#tile5");
    consoleLog();
    winner(counterX);
    winner(counterO);
});

$("#button6").click(function() {
    cycle("6");
    performLogic("#button6","#tile6");
    consoleLog();
    winner(counterX);
    winner(counterO);
});

$("#button7").click(function() {
    cycle("7");
    performLogic("#button7","#tile7");
    consoleLog();
    winner(counterX);
    winner(counterO);
});

$("#button8").click(function() {
    cycle("8");
    performLogic("#button8","#tile8");
    consoleLog();
    winner(counterX);
    winner(counterO);
});

$("#button9").click(function() {
    cycle("9");
    performLogic("#button9","#tile9");
    consoleLog();
    winner(counterX);
    winner(counterO);
});
