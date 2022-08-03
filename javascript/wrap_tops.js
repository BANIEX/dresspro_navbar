no_of_wrap_tops_images = 36;
const whatsapp_phone_number = '+2347039999740'



let wrap_tops_image_section = document.getElementsByClassName("wrap_tops_image_section")[0];


for(let i = 1; i <= no_of_wrap_tops_images; i++){
        
    let wrap_tops_image_container = document.createElement("div");
    wrap_tops_image_container.id = `wrap_tops_image_container${i}`;
    wrap_tops_image_container.className = `wrap_tops_image_container`;

    let wrap_tops_image = document.createElement("div");
    wrap_tops_image.id = `wrap_tops_image${i}`;
    wrap_tops_image.className = `wrap_tops_image`;

    let wrap_tops_image_hover = document.createElement("div");
    wrap_tops_image_hover.id = `wrap_tops_image_hover${i}`;
    wrap_tops_image_hover.className = `wrap_tops_image_hover`;

    let image_identity = document.createElement("div");
    image_identity.id = `image_identity${i}`;
    image_identity.className = 'image_identity';

    let image_ID = `WT10${i}`

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

    wrap_tops_image_section.appendChild(wrap_tops_image_container);
    wrap_tops_image_container.appendChild(wrap_tops_image);
    wrap_tops_image.appendChild(wrap_tops_image_hover);
    

    

    wrap_tops_image_hover.appendChild(image_identity);
    wrap_tops_image_hover.appendChild(buy_now);

    wrap_tops_image.appendChild(wrap_tops_image_hover);




}


// alert("hi");

let noOfMiniSkirtsDivs = document.getElementsByClassName(
  "wrap_tops_image_container"
).length;

for (let i = 0; i < noOfMiniSkirtsDivs; i++) {
  let currentSlide = document.getElementsByClassName(
    "wrap_tops_image_container"
  )[i];
  currentSlide.addEventListener("mouseover", function () {
    document.getElementsByClassName("wrap_tops_image_hover")[
      i
    ].style.display = "block";
  });
  currentSlide.addEventListener("mouseleave", function () {
    document.getElementsByClassName("wrap_tops_image_hover")[
      i
    ].style.display = "none";
    // alert("left")
  });
}

