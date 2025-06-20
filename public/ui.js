
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

//textbox visibility 
txtbox = document.getElementById("textbox"); 
function txt_tog() {
    if(txtbox.style.display == "none") {
        txtbox.style.display = "block"; 
    } else {
        txtbox.style.display = "none"; 
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
