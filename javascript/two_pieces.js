no_of_two_pieces_images = 36;


let two_pieces_image_section = document.getElementsByClassName("two_pieces_image_section")[0];


for(let i = 0; i < no_of_two_pieces_images; i++){
        
    let two_pieces_image_container = document.createElement("div");
    two_pieces_image_container.id = `two_pieces_image_container${i}`;
    two_pieces_image_container.className = `two_pieces_image_container`;

    let two_pieces_image = document.createElement("div");
    two_pieces_image.id = `two_pieces_image${i}`;
    two_pieces_image.className = `two_pieces_image`;

    let two_pieces_image_hover = document.createElement("div");
    two_pieces_image_hover.id = `two_pieces_image_hover${i}`;
    two_pieces_image_hover.className = `two_pieces_image_hover`;

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


    two_pieces_image_section.appendChild(two_pieces_image_container);
    two_pieces_image_container.appendChild(two_pieces_image);
    two_pieces_image.appendChild(two_pieces_image_hover);
    

    

    two_pieces_image_hover.appendChild(image_identity);
    two_pieces_image_hover.appendChild(buy_now);

    two_pieces_image.appendChild(two_pieces_image_hover);




}


alert("hi");

let noOfTwoPiecesDivs = document.getElementsByClassName(
  "two_pieces_image_container"
).length;

for (let i = 0; i < noOfTwoPiecesDivs; i++) {
  let currentSlide = document.getElementsByClassName(
    "two_pieces_image_container"
  )[i];
  currentSlide.addEventListener("mouseover", function () {
    document.getElementsByClassName("two_pieces_image_hover")[
      i
    ].style.display = "block";
  });
  currentSlide.addEventListener("mouseleave", function () {
    document.getElementsByClassName("two_pieces_image_hover")[
      i
    ].style.display = "none";
    // alert("left")
  });
}

