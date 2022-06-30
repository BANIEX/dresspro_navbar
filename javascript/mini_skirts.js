no_of_mini_skirts_images = 36;


let mini_skirts_image_section = document.getElementsByClassName("mini_skirts_image_section")[0];


for(let i = 0; i < no_of_mini_skirts_images; i++){
        
    let mini_skirts_image_container = document.createElement("div");
    mini_skirts_image_container.id = `mini_skirts_image_container${i}`;
    mini_skirts_image_container.className = `mini_skirts_image_container`;

    let mini_skirts_image = document.createElement("div");
    mini_skirts_image.id = `mini_skirts_image${i}`;
    mini_skirts_image.className = `mini_skirts_image`;

    let mini_skirts_image_hover = document.createElement("div");
    mini_skirts_image_hover.id = `mini_skirts_image_hover${i}`;
    mini_skirts_image_hover.className = `mini_skirts_image_hover`;

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


    mini_skirts_image_section.appendChild(mini_skirts_image_container);
    mini_skirts_image_container.appendChild(mini_skirts_image);
    mini_skirts_image.appendChild(mini_skirts_image_hover);
    

    

    mini_skirts_image_hover.appendChild(image_identity);
    mini_skirts_image_hover.appendChild(buy_now);

    mini_skirts_image.appendChild(mini_skirts_image_hover);




}


alert("hi");

let noOfMiniSkirtsDivs = document.getElementsByClassName(
  "mini_skirts_image_container"
).length;

for (let i = 0; i < noOfMiniSkirtsDivs; i++) {
  let currentSlide = document.getElementsByClassName(
    "mini_skirts_image_container"
  )[i];
  currentSlide.addEventListener("mouseover", function () {
    document.getElementsByClassName("mini_skirts_image_hover")[
      i
    ].style.display = "block";
  });
  currentSlide.addEventListener("mouseleave", function () {
    document.getElementsByClassName("mini_skirts_image_hover")[
      i
    ].style.display = "none";
    // alert("left")
  });
}

