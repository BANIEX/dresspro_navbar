no_of_satin_dress_lace_images = 36;


let satin_dress_lace_image_section = document.getElementsByClassName("satin_dress_lace_image_section")[0];


for(let i = 0; i < no_of_satin_dress_lace_images; i++){
        
    let satin_dress_lace_image_container = document.createElement("div");
    satin_dress_lace_image_container.id = `satin_dress_lace_image_container${i}`;
    satin_dress_lace_image_container.className = `satin_dress_lace_image_container`;

    let satin_dress_lace_image = document.createElement("div");
    satin_dress_lace_image.id = `satin_dress_lace_image${i}`;
    satin_dress_lace_image.className = `satin_dress_lace_image`;

    let satin_dress_lace_image_hover = document.createElement("div");
    satin_dress_lace_image_hover.id = `satin_dress_lace_image_hover${i}`;
    satin_dress_lace_image_hover.className = `satin_dress_lace_image_hover`;

    let image_identity = document.createElement("div");
    image_identity.id = `image_identity${i}`;
    image_identity.className = 'image_identity';

    let image_identity_text = document.createTextNode(`IMS10-${i}`);

    image_identity.appendChild(image_identity_text);

    let buy_now = document.createElement(`div`);
    buy_now.id = `buy_now${i}`;
    buy_now.className = `buy_now`;

    let buy_now_text = document.createTextNode("BUY NOW");

    buy_now.appendChild(buy_now_text);


    satin_dress_lace_image_section.appendChild(satin_dress_lace_image_container);
    satin_dress_lace_image_container.appendChild(satin_dress_lace_image);
    satin_dress_lace_image.appendChild(satin_dress_lace_image_hover);
    

    

    satin_dress_lace_image_hover.appendChild(image_identity);
    satin_dress_lace_image_hover.appendChild(buy_now);

    satin_dress_lace_image.appendChild(satin_dress_lace_image_hover);




}


alert("hi");

let noOfSatinDressLaceDivs = document.getElementsByClassName(
  "satin_dress_lace_image_container"
).length;

for (let i = 0; i < noOfSatinDressLaceDivs; i++) {
  let currentSlide = document.getElementsByClassName(
    "satin_dress_lace_image_container"
  )[i];
  currentSlide.addEventListener("mouseover", function () {
    document.getElementsByClassName("satin_dress_lace_image_hover")[
      i
    ].style.display = "block";
  });
  currentSlide.addEventListener("mouseleave", function () {
    document.getElementsByClassName("satin_dress_lace_image_hover")[
      i
    ].style.display = "none";
    // alert("left")
  });
}

