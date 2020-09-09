const prevButton = document.querySelector("body > main > section.card-container > figure.next-menu > img.prev");
const nextButton = document.querySelector("body > main > section.card-container > figure.next-menu > img.next");
const card1 = img= document.querySelector("body > main > section.card-container > figure.card-img > img.card1");
const card1Details = document.querySelector("body > main > section.cards-container-fix > div.card-details.cardone")
const card2 = img= document.querySelector("body > main > section.card-container > figure.card-img > img.card2");
const card2Details = document.querySelector("body > main > section.cards-container-fix > div.card-details.cardtwu")


prevButton.addEventListener("click", hide) 
nextButton.addEventListener("click", hide)

function hide() {
   if (card1.className === "card1") {
      card1.className += " hide";
      card1Details.className += " hide" ;
      card2.className = "card2";
      card2Details.className = "card-details cardtwu"
   } else {
    card1.className = "card1";
    card1Details.className = "card-details cardone" ;
    card2.className += " hide";
    card2Details.className += "  hide"
   }
}
