import  items  from "./data.js";

onload();

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
        <button class="add-to-bag">Add to Cart</button>
      </div>`;
  });

  let itemContainer = document.querySelector(".items-container");
  itemContainer.innerHTML = innerHtml;
}
