


/* ==========================
   RESTAURANT SLIDER
========================== */

const restaurantImages = [

"chosen-photo-17-scaled.jpg",
"Restaurant-10-scaled.jpg",
"Restaurant-30-scaled.jpg",
"chosen-photo-8-scaled.jpg",
"chosen-photo-9-1-1536x1024.jpg"

];

let restaurantIndex = 0;

const restaurantImg =
document.querySelector(".restaurant-image img");

const restaurantNext =
document.querySelector(".restaurant-image .next");

const restaurantPrev =
document.querySelector(".restaurant-image .prev");

restaurantNext.onclick = function(){

    restaurantIndex++;

    if(restaurantIndex >= restaurantImages.length){

        restaurantIndex = 0;

    }

    restaurantImg.src = restaurantImages[restaurantIndex];

}

restaurantPrev.onclick = function(){

    restaurantIndex--;

    if(restaurantIndex < 0){

        restaurantIndex = restaurantImages.length-1;

    }

    restaurantImg.src = restaurantImages[restaurantIndex];

}


/* ==========================
   BAR SLIDER
========================== */

const barImages = [

"chosen-photo-10-scaled.jpg",
"PHOTO-2022-08-30-19-33-26-1.jpg"

];

let barIndex = 0;

const barImg =
document.getElementById("barImage");

const barNext =
document.querySelector(".slider .next");

const barPrev =
document.querySelector(".slider .preview");

barNext.onclick = function(){

    barIndex++;

    if(barIndex >= barImages.length){

        barIndex = 0;

    }

    barImg.src = barImages[barIndex];

}

barPrev.onclick = function(){

    barIndex--;

    if(barIndex < 0){

        barIndex = barImages.length-1;

    }

    barImg.src = barImages[barIndex];

}

/* ==========================
      POOL BAR SLIDER
========================== */

const poolImages = [

    "13ca6d6d-e844-4836-b166-8e86cdb9c814.jpg",
    "pull.jpg"

];

let poolIndex = 0;

const poolImage = document.getElementById("poolImage");

document.querySelector(".pool-next").onclick = function(){

    poolIndex++;

    if(poolIndex >= poolImages.length){

        poolIndex = 0;

    }

    poolImage.src = poolImages[poolIndex];

}

document.querySelector(".pool-prev").onclick = function(){

    poolIndex--;

    if(poolIndex < 0){

        poolIndex = poolImages.length - 1;

    }

    poolImage.src = poolImages[poolIndex];

}