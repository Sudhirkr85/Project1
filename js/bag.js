import items from "./data.js";
let card = JSON.parse(localStorage.getItem("card")) || [];
countShow();
onLoad();

function onLoad() {
  let newItems = items.filter((item) => card.includes(String(item.id)));
  console.log(newItems);
  let innerHtml = ``;
  newItems.forEach((item) => {
    innerHtml += `<div class="item">
<div class="image-container">
  <img   src="${item.imageUrl}"  />
</div>
<div class="item-details-container">
  <h3>${item.name}</h3>
  <p>${item.description}</p>
  <div class="price">
          <span class="discounted-price">₹${item.discountedPrice}</span>
          <span class="original-price">₹${item.originalPrice}</span>
          <span class="discount"> (${item.discount}% off)</span>
  </div>
</div>
<i class="fa-solid fa-xmark" data-id="${item.id}"></i>
</div>`;
  });
  let item_details = document.querySelector(".item-details");
  item_details.innerHTML = innerHtml;

  let totalMRP = 0;
  let totalAmount = 0;

  newItems.forEach((item) => {
    totalMRP += item.discount;
    totalAmount += item.originalPrice;
  });
  document.getElementById("mrp").innerText= '₹'+ totalMRP;
  document.getElementById("amount").innerText= '₹'+ totalAmount;
  
}

const closeButtons = document.querySelectorAll(".fa-xmark");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let id = button.getAttribute("data-id");

    card = card.filter((x) => x != id);
    localStorage.setItem("card", JSON.stringify(card));
    countShow();
    onLoad();
  });
});

function countShow() {
  let itemCount = document.querySelector("#itemCount");
  itemCount.textContent = card.length;
  if (card.length > 0) itemCount.style.display = "block";
}
