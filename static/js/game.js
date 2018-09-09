function loadCardImg(cardID, contID) {
  document.getElementById(contID).innerHTML = "<img src='card/img/" + cardID + ".jpg'>";
};

function downCard(contID) {
  var card = document.getElementById(contID);
  card.style.cssText=card.style.cssText+"animation-name: cardDown; animation-duration: 0.7s; animation-timing-function: linear; animation-fill-mode: forwards;";
};