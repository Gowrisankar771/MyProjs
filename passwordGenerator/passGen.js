if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var btn = document.getElementById('btn');
    var divs = document.getElementsByClassName('pass')
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.addEventListener('click',copyPass);
    }
    btn.addEventListener('click',displayPass);
}

function generatePass() {
    var passChar = []
    var len = document.getElementById('passLength');
    let val = len.value
    if (val < 5){
        val = 5;
        len.value = val;
    } else if (val > 20){
        val = 20;
        len.value = val;
    }
    for (var i = 0; i < val; i++){
        let val = generateRandomChar()
        passChar.push(val)
    }
    
    let pass = passChar.join('');
    return pass
}

function displayPass(){
    var div = document.getElementsByClassName('pass');
    for (var i = 0; i <4; i++) {
        let val = generatePass()
        div[i].textContent = val;
    }
}

function generateRandomChar(){
    let num = Math.floor(Math.random()*94) + 33;
    let char = String.fromCharCode(num);
    return char
}
function copyPass(eve) {
    let div = eve.target;
    let text = div.innerText;
    if (text !== '.....') {
        let textArea  = document.createElement('textarea');
        textArea.width  = "1px"; 
        textArea.height = "1px";
        textArea.background =  "transparents" ;
        textArea.value = text;
        document.body.append(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
}