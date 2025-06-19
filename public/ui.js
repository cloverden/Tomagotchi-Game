// var txt = document.getElementById('textbox'); 
// // txt.style.visbility = hidden; 

// const textArea = document.getElementById("txtarea"); 
// textArea.addEventListener('click', Name(), {
// }); 
//     function Name() {
//         const name_val = textArea.value; 
//         console.log(name_val); 
//         // txt.style.visibility = visible; 
//     }


document.addEventListener("DOMContentLoaded", function() {
}); 
const textArea = document.getElementById("txtarea"); 

    function Name() {
        const name_val = textArea.value; 
        sessionStorage.setItem("petName", name_val); //key, value
        console.log(name_val); 
        // txt.style.visibility = visible; 
    }; 
document.addEventListener("DOMContentLoaded", Name); 


//icons
const texter = document.getElementById("text"); 
function dress_in() {
    console.log("di_fired"); 
    var info = "Dress up" + " " + sessionStorage.getItem("petName"); 
    document.getElementById("text").innerText = info; 
}; 

function status_in() {
    console.log("si_fired"); 
    var info = "Check up on" + " " + sessionStorage.getItem("petName"); 
    document.getElementById("text").innerText = info; 
}

function lights_in() {
    console.log("li_fired"); 
    var info = "Change the lights"; 
    document.getElementById("text").innerText = info; 
}

function mouse_out() {
    console.log("mo_fired"); 
    var info = "Text"; 
    document.getElementById("text").innerText = info; 
}

//mouseout frame delay
if(mouse_out()) {
    setTimeout(4000); //1000 miliseconds = 1 second
}

