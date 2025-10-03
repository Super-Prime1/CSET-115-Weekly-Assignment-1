var func = "";
var answer = 0;
var num1 = 0;
var num2 = 0;

// document.getElementById("zero").onclick = function click(){
//     updateCalc(0);
// }
document.getElementById("one").onclick = function click(){
    updateCalc(1);
}
document.getElementById("two").onclick = function click(){
    updateCalc(2);
}
// document.getElementById("three").onclick = function click(){
//     updateCalc(3);
// };
// document.getElementById("four").onclick = function click(){
//     updateCalc(4);
// };
// document.getElementById("five").onclick = function click(){
//     updateCalc(5);
// };
// document.getElementById("six").onclick = function click(){
//     updateCalc(6);
// };
// document.getElementById("seven").onclick = function click(){
//     updateCalc(7);
// };
// document.getElementById("eight").onclick = function click(){
//     updateCalc(8);
// };
// document.getElementById("nine").onclick = function click(){
//     updateCalc(9);
// };



function updateCalc(value){
    const calc = document.getElementById("calc");
    let current = calc.innerText;
    calc.innerText = current + value;
}


function add(){
    num1 = parseInt(document.getElementById("calc").innerText || 0);
    document.getElementById("calc").innerText = "";
    func = "add";
    console.log(func);
}

function sub(){
    num1 = parseInt(document.getElementById("calc").innerText || 0);
    document.getElementById("calc").innerText = "";
    func = "sub";
    console.log(func);
}

function mul(){
    num1 = parseInt(document.getElementById("calc").innerText || 0);
    document.getElementById("calc").innerText = "";
    func = "mul";
    console.log(func);
}
function div(){
    num1 = parseInt(document.getElementById("calc").innerText || 0);
    document.getElementById("calc").innerText = "";
    func = "div";
    console.log(func);
}

function finish(){
    num2 = parseInt(document.getElementById("calc").innerText);
    console.log(num2);
    if(func === "add"){
        answer = num1 + num2;
        calc.innerText = answer;
    }
    if(func === "sub"){
        answer = num1 - num2;
        calc.innerText = answer;
    }
        if(func === "mul"){
        answer = num1 * num2;
        calc.innerText = answer;
    }
            if(func === "div"){
        answer = num1 / num2;
        calc.innerText = answer;
    }
}


function change(){
    let num = parseInt(document.getElementById("calc").innerText || 0);
    num = num * -1;
    document.getElementById("calc").innerText = num;

}