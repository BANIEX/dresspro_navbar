no_of_satin_dress_lace_images = 36;
const whatsapp_phone_number = '+2347039999740'



let satin_dress_lace_image_section = document.getElementsByClassName("satin_dress_lace_image_section")[0];


for(let i = 1; i <= no_of_satin_dress_lace_images; i++){
        
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


    let image_ID = `SAT10${i}`

    let image_identity_text = document.createTextNode(image_ID);

    image_identity.appendChild(image_identity_text);

    let buy_now = document.createElement(`div`);
    buy_now.id = `buy_now${i}`;
    buy_now.className = `buy_now`;


    let buy_now_link = document.createElement('a')
    buy_now_link.href =  `http://wa.me/${whatsapp_phone_number}?text=Hi, I'm interested in purchasing this product with ID:   ${image_ID} `
                  

    let buy_now_text = document.createTextNode("BUY NOW");


    buy_now_link.appendChild(buy_now_text);
    buy_now.appendChild(buy_now_link);


    satin_dress_lace_image_section.appendChild(satin_dress_lace_image_container);
    satin_dress_lace_image_container.appendChild(satin_dress_lace_image);
    satin_dress_lace_image.appendChild(satin_dress_lace_image_hover);
    

    

    satin_dress_lace_image_hover.appendChild(image_identity);
    satin_dress_lace_image_hover.appendChild(buy_now);

    satin_dress_lace_image.appendChild(satin_dress_lace_image_hover);




}


// alert("hi");

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

