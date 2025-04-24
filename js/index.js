import items from "./data.js";


let card =  JSON.parse( localStorage.getItem('card'))||[];

onload();
countShow();

function onload() {
  let innerHtml = ` `;

  items.forEach((item) => {
    innerHtml += `<div class="item-card">
        <img
          src="${item.imageUrl}"
        />
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <div class="price">
          <span class="discounted-price">₹${item.discountedPrice}</span>
          <span class="original-price">₹${item.originalPrice}</span>
          <span class="discount"> (${item.discount}% off)</span>
        </div>
        <button class="add-to-bag" data-id="${item.id}" >Add to Cart </button>
      </div>`;
  });

  let itemContainer = document.querySelector(".items-container");
  itemContainer.innerHTML = innerHtml;


}

let addToBagButtons = document.querySelectorAll(".add-to-bag");
addToBagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    let data_id = button.getAttribute("data-id");
    if (!card.includes(data_id)) {
      card.push(data_id);
     localStorage.setItem("card",JSON.stringify(card))
     countShow()
    }
  });
});

function countShow(){
  let itemCount = document.querySelector("#itemCount");
  itemCount.textContent = card.length;
  if(card.length>0)
    itemCount.style.display = "block";
  
}