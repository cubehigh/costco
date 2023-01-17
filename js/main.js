export const tabMenu = function () {
  const tabsContainer = document.querySelector(".tabnav");

  tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".brand_logo");
    const contentContainer = document.querySelectorAll(".tab_contents > li");

    if (!clicked) return;

    contentContainer.forEach((content) =>
      content.classList.remove("tabactive")
    );

    document
      .querySelector(`#tab0${clicked.dataset.tab}`)
      .classList.add("tabactive");
  });
};
// tabmenu

const productContainer = document.querySelector(".product_container");

const renderItem = function (data) {
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
  productContainer.insertAdjacentHTML("beforeend", html);
};

export const getData = async function (name) {
  const res = await fetch(`./data/${name}.json`);
  const data = await res.json();
  data.forEach((items) => renderItem(items, name));
};

export const filterItems = function () {
  const categoryButtons = document.querySelector(".filter_container");

  categoryButtons.addEventListener("click", function (e) {
    const filter = e.target.closest(".category");
    if (!filter) return;
    const filters = this.querySelectorAll(".category");
    filters.forEach((filter) => {
      filter.classList.remove("filterActive");
    });
    filter.classList.add("filterActive");

    const items = document.querySelectorAll(".item");

    items.forEach(function (item) {
      item.classList.add("hidden");
      if (item.classList.contains(filter.dataset.category)) {
        item.classList.remove("hidden");
      }
      if (filter.dataset.category === "all") {
        item.classList.remove("hidden");
      }
    });
  });
};

export const goToTop = function () {
  const visual = document.querySelector(".visual");
  const goTop = document.querySelector(".go_top");

  const revealGoToTop = function (entries) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) goTop.classList.add("active");
    else goTop.classList.remove("active");
  };
  const visualObserver = new IntersectionObserver(revealGoToTop, {
    root: null,
    threshold: 0.6,
  });

  visualObserver.observe(visual);

  goTop.addEventListener("click", function (e) {
    const body = document.querySelector("body");

    e.preventDefault();
    body.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};
