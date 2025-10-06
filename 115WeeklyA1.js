var func = "";
var answer = 0;
var num1 = 0;
var num2 = 0;
let history = [];


document.getElementById("zero").onclick = function click(){
    updateCalc(0);
}
document.getElementById("one").onclick = function click(){
    updateCalc(1);
}
document.getElementById("two").onclick = function click(){
    updateCalc(2);
}
document.getElementById("three").onclick = function click(){
    updateCalc(3);
};
document.getElementById("four").onclick = function click(){
    updateCalc(4);
};
document.getElementById("five").onclick = function click(){
    updateCalc(5);
};
document.getElementById("six").onclick = function click(){
    updateCalc(6);
};
document.getElementById("seven").onclick = function click(){
    updateCalc(7);
};
document.getElementById("eight").onclick = function click(){
    updateCalc(8);
};
document.getElementById("nine").onclick = function click(){
    updateCalc(9);
};



function updateCalc(value){
    const calc = document.getElementById("calc");
    let current = calc.innerText;
    calc.innerText = current + value;
}


function add(){
    num1 = parseFloat(document.getElementById("calc").innerText || 0);
    document.getElementById("calc").innerText = "";
    func = "add";
}

function sub(){
    num1 = parseFloat(document.getElementById("calc").innerText || 0);
    document.getElementById("calc").innerText = "";
    func = "sub";
}

function mul(){
    num1 = parseFloat(document.getElementById("calc").innerText || 0);
    document.getElementById("calc").innerText = "";
    func = "mul";
}
function div(){
    num1 = parseFloat(document.getElementById("calc").innerText || 0);
    document.getElementById("calc").innerText = "";
    func = "div";
}

function cle(){
    calc.innerText = "";
}

function dot(){
    calc.innerText += "."
}

function del(){
    calc.innerText = calc.innerText.slice(0,-1);
}

function his(){
    console.log(`History:`)
    for(let i =0;i<history.length;i++){
        console.log(history[i]);
    }
}


function finish(){
    num2 = parseFloat(document.getElementById("calc").innerText);
    if(func === "add"){
        answer = num1 + num2;
        calc.innerText = answer;
        history.push(`${num1} + ${num2} = ${num1 + num2}`);
    }
    if(func === "sub"){
        answer = num1 - num2;
        calc.innerText = answer;
        history.push(`${num1} - ${num2} = ${num1 - num2}`);

    }
    if(func === "mul"){
        answer = num1 * num2;
        calc.innerText = answer;
        history.push(`${num1} * ${num2} = ${num1 * num2}`);

    }
    if(func === "div"){
        answer = num1 / num2;
        calc.innerText = answer;
        history.push(`${num1} / ${num2} = ${num1 / num2}`);

    }
}


function change(){
    let num = parseFloat(document.getElementById("calc").innerText || 0);
    num = num * -1;
    document.getElementById("calc").innerText = num;

}