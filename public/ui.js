var txt = document.getElementById('textbox'); 
// txt.style.visbility = hidden; 

const textArea = document.getElementById("txtarea"); 
textArea.addEventListener('click', Name(), {
}); 
    function Name() {
        const name_val = textArea.value; 
        console.log(name_val); 
        // txt.style.visibility = visible; 
    }