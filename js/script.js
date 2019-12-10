let counterX = 0;
let counterO = 0;
let text = "x";

function performLogic(button, tile){
    $(button).hide();
    $(tile).text(text);
}
function cycle() {
    if (text == "o") {
        text = "x";
        counterX = counterX + 1;
    } else if (text == "x") {
        text = "o";
        counterO = counterO + 1;
    }
}

$("#button1").click(function() {
    cycle();
    performLogic("#button1","#tile1");
    console.log(counterO);
    console.log(counterX);
    console.log(text);
});

$("#button2").click(function() {
    cycle();
    performLogic("#button2","#tile2");
    console.log(counter);
    console.log(text);
});

$("#button3").click(function() {
    cycle();
    performLogic("#button3","#tile3");
    console.log(counter);
    console.log(text);
});

$("#button4").click(function() {
    cycle();
    performLogic("#button4","#tile4");
    console.log(counter);
    console.log(text);
});

$("#button5").click(function() {
    cycle();
    performLogic("#button5","#tile5");
    console.log(counter);
    console.log(text);
});

$("#button6").click(function() {
    cycle();
    performLogic("#button6","#tile6");
    console.log(counter);
    console.log(text);
});

$("#button7").click(function() {
    cycle();
    performLogic("#button7","#tile7");
    console.log(counter);
    console.log(text);
});

$("#button8").click(function() {
    cycle();
    performLogic("#button8","#tile8");
    console.log(counter);
    console.log(text);
});

$("#button9").click(function() {
    cycle();
    performLogic("#button9","#tile9");
    console.log(counter);
    console.log(text);
});

