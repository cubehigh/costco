import { goToTop } from "./main.js";
goToTop();

const change = function () {
  let results = Array.from(document.querySelectorAll(".item"));
  let brandChecked = document.querySelectorAll("input.filter-brand:checked");
  let resolutionChecked = document.querySelectorAll(
    "input.filter-resolution:checked"
  );
  let inchChecked = document.querySelectorAll("input.filter-inch:checked");

  const filterBrandOrResolution = function (checked) {
    results = Array.from(checked).reduce(function (sum, input) {
      const value = input.getAttribute("value");
      return sum.concat(
        results.filter((result) => result.classList.contains(value))
      );
    }, []);
  };

  // Hide all results
  results.forEach((result) => result.classList.add("hidden"));
  // Filter results to only those that meet ALL requirements:

  if (brandChecked.length !== 0) filterBrandOrResolution(brandChecked);

  if (resolutionChecked.length !== 0)
    filterBrandOrResolution(resolutionChecked);

  if (inchChecked.length !== 0) filterBrandOrResolution(inchChecked);

  // Show those filtered results:
  results.forEach((result) => result.classList.remove("hidden"));
};

const createHTML = function (data) {
  return `
  <li class="item ${data.brand} ${data.resolution} ${data.size}">
         <a href=""
           ><img
             src="${data.images}"
             alt="${data.title}"
         /></a>
         <p class="review">${data.review}</p>
         <h3 class="pro_name"><a href="">${data.title}</a></h3>
         <p class="discount">
         ${
           data.discount
             ? `-${data.discount}% <span>${data.price}원</span>
            `
             : ""
         }
        </p>
        <div class="pri_cart">
          <h4 class="pro_price">${
            data.discount ? `${data.dis_price}` : `${data.price}`
          }<span class="won">원</span></h4>
          <form action="" class="cart_btn">
            <button>
              <span class="material-icons-outlined cart"
                >shopping_cart</span
              >
            </button>
          </form>
        </div>
      </li>
  `;
};

const displayItems = function (data) {
  const productContainer = document.querySelector(".product_container");
  productContainer.insertAdjacentHTML(
    "beforeend",
    data.map((item) => createHTML(item)).join("")
  );
};

const loadItems = async function () {
  const res = await fetch("./data/TV.json");
  const data = await res.json();
  displayItems(data);

  const filters = document.querySelectorAll("input");
  filters.forEach((filter) => {
    filter.addEventListener("change", change);
  });
};
loadItems();
