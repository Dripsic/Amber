const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", search);

input.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        search();

    }

});

function search(){

    const text = input.value.trim();

    if(text === ""){

        alert("Please enter a search term.");

        return;
    }

    window.open(
        "https://www.google.com/search?q=" +
        encodeURIComponent(text),
        "_blank"
    );

}