import { goToTop } from "./main.js";

goToTop();

const links = document.querySelector(".links");
links.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const productContainer = document.querySelectorAll(".product_container");

const renderItem = function (data, name) {
  const html = `
    <li class="item ${data.type}">
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
  // console.log(html);
  // productContainer.insertAdjacentHTML("beforeend", html);
  productContainer.forEach((container) => {
    if (container.dataset.category === name) {
      container.insertAdjacentHTML("beforeend", html);
    }
  });
};

const getData = function (dir, name) {
  fetch(`./data/${dir}/${name}.json`)
    .then((res) => res.json())
    .then((data) => data.forEach((items) => renderItem(items, name)));
};

getData("kirkland", "food");
getData("kirkland", "home");
getData("kirkland", "supplies");
getData("kirkland", "pet");
