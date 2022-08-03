no_of_smocked_tops_long_images = 36;
const whatsapp_phone_number = '+2347039999740'



let smocked_tops_long_image_section = document.getElementsByClassName("smocked_tops_long_image_section")[0];


for(let i = 1; i <= no_of_smocked_tops_long_images; i++){
        
    let smocked_tops_long_image_container = document.createElement("div");
    smocked_tops_long_image_container.id = `smocked_tops_long_image_container${i}`;
    smocked_tops_long_image_container.className = `smocked_tops_long_image_container`;

    let smocked_tops_long_image = document.createElement("div");
    smocked_tops_long_image.id = `smocked_tops_long_image${i}`;
    smocked_tops_long_image.className = `smocked_tops_long_image`;

    let smocked_tops_long_image_hover = document.createElement("div");
    smocked_tops_long_image_hover.id = `smocked_tops_long_image_hover${i}`;
    smocked_tops_long_image_hover.className = `smocked_tops_long_image_hover`;

    let image_identity = document.createElement("div");
    image_identity.id = `image_identity${i}`;
    image_identity.className = 'image_identity';

    let image_ID = `RD10${i}`

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



    smocked_tops_long_image_section.appendChild(smocked_tops_long_image_container);
    smocked_tops_long_image_container.appendChild(smocked_tops_long_image);
    smocked_tops_long_image.appendChild(smocked_tops_long_image_hover);
    

    

    smocked_tops_long_image_hover.appendChild(image_identity);
    smocked_tops_long_image_hover.appendChild(buy_now);

    smocked_tops_long_image.appendChild(smocked_tops_long_image_hover);




}


// alert("hi");

let noOfSmockedTopsLonngDivs = document.getElementsByClassName(
  "smocked_tops_long_image_container"
).length;

for (let i = 0; i < noOfSmockedTopsLonngDivs; i++) {
  let currentSlide = document.getElementsByClassName(
    "smocked_tops_long_image_container"
  )[i];
  currentSlide.addEventListener("mouseover", function () {
    document.getElementsByClassName("smocked_tops_long_image_hover")[
      i
    ].style.display = "block";
  });
  currentSlide.addEventListener("mouseleave", function () {
    document.getElementsByClassName("smocked_tops_long_image_hover")[
      i
    ].style.display = "none";
    // alert("left")
  });
}

