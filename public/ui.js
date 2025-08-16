
document.addEventListener("DOMContentLoaded", function() {
}); 
const textArea = document.getElementById("txtarea"); 
const textArea_b = document.getElementById("save_name"); 

    function Name() { 
        const name_val = textArea.value; 
        sessionStorage.setItem("petName", name_val); //key, value 
        console.log(name_val); 
        txt_tog(); 
        txtarea_tog(); 
    }; 
document.addEventListener("DOMContentLoaded", Name); 

//tap mew 
var m_note = document.getElementById("note"); 
function tap() {
    m_note.style.display = "block"; 
    console.log("tapped"); 
}
function tap_out() {
    m_note.style.display = "none"; 
    console.log("tapped out"); 
}
setTimeout(tap_out, 3000); 

//textbox visibility 
txtbox = document.getElementById("textbox"); 
function txt_tog() {
    if(txtbox.style.display == "none") {
        txtbox.style.display = "block"; 
    } else {
        txtbox.style.display = "none"; 
        return; 
    }
}

//textarea visibility 
function txtarea_tog()  {
    if(textArea.style.display == "block" && textArea_b.style.display == "block") {
        textArea.style.display = "none"; 
        textArea_b.style.display = "none"; 
    } else {
        textArea.style.display = "block"; 
        textArea_b.style.display = "block"; 
    }
}

//window function 
var top_window = document.getElementById("win"); 
function win_tog(icon) { 
    if(top_window.style.display == "none") {
        top_window.style.display = "block"; 
    } else {
        if(top_window.dataset.active === icon){
            top_window.style.display = "none"; 
            return; 
        }
    }
    
    switch(icon) {
        case 'bow':
            top_window.style.backgroundImage = "url('images/dress_up_w_pl.png')"; 
            break; 
        case 'flag':
            top_window.style.backgroundImage = "url('images/status_w_pl.png')"; 
            break; 
        case 'A': 
            top_window.style.backgroundImage = "url('images/feed_w_pl.png')"; 
            break; 
        case 'B': 
            top_window.style.backgroundImage = "url('images/clean_w_pl.png')"; 
            break; 
        case 'C': 
            top_window.style.backgroundImage = "url('images/toy_w_pl.png')"; 
            break; 
    }

    top_window.dataset.active = icon;
    console.log("Window fired via ", icon); 
}

//icons
const texter = document.getElementById("text"); 
function dress_in() {
    console.log("di_fired"); 
    var info = "Dress up" + " " + sessionStorage.getItem("petName"); 
    texter.style.display = "block"; 
    document.getElementById("text").innerText = info; 
}; 

function status_in() {
    console.log("si_fired"); 
    var info = "Check up on" + " " + sessionStorage.getItem("petName"); 
    texter.style.display = "block"; 
    document.getElementById("text").innerText = info; 
}

function lights_in() {
    console.log("li_fired"); 
    var info = "Change the lights"; 
    texter.style.display = "block"; 
    document.getElementById("text").innerText = info; 
}

function mouse_out() {
    console.log("mo_fired"); 
    var info = "Text"; 
    document.getElementById("text").innerText = info; 
    texter.style.display = "none";
}
