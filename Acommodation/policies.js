const items = document.querySelectorAll(".item");

items.forEach(item => {

    const title = item.querySelector(".title");

    title.addEventListener("click", () => {

        items.forEach(other => {

            if(other !== item){

                other.classList.remove("active");

                other.querySelector("i").className = "fa-solid fa-plus";

            }

        });

        item.classList.toggle("active");

        const icon = item.querySelector("i");

        if(item.classList.contains("active")){

            icon.className = "fa-solid fa-minus";

        }else{

            icon.className = "fa-solid fa-plus";

        }

    });

});