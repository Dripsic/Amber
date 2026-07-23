const dropBtn = document.getElementById("dropBtn");
const dropMenu = document.getElementById("dropMenu");

dropBtn.addEventListener("click", function(e){

    e.preventDefault();

    dropMenu.classList.toggle("show");

});

// Close when clicking outside
document.addEventListener("click", function(e){

    if(!dropBtn.contains(e.target) && !dropMenu.contains(e.target)){
        dropMenu.classList.remove("show");
    }

});

