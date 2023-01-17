"use strict";

const tabMenu = function () {
  const tabsContainer = document.querySelector(".tabnav");
  const lists = tabsContainer.querySelectorAll("li");

  tabsContainer.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".tablist");
    const contentContainer = document.querySelectorAll(".tab_contents > li");
    if (!clicked) return;
    lists.forEach((list) => {
      list.classList.remove("active");
      if (clicked) {
        clicked.parentElement.classList.add("active");
      }
    });

    contentContainer.forEach((content) =>
      content.classList.remove("tabactive")
    );

    document
      .querySelector(`#tab0${clicked.dataset.tab}`)
      .classList.add("tabactive");
  });
};
tabMenu();

const activeSwiper = function () {
  const detailedSwiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const detailedSwiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: detailedSwiper,
    },
  });
};
activeSwiper();

const swiper = new Swiper("#other_products > .container > .slider3", {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: "#other_products > .container > .swiper-button-next",
    prevEl: "#other_products > .container > .swiper-button-prev",
  },
});

const closeModal = function () {
  const closeBtn = document.querySelector(".notice_cancel");
  const background = document.querySelector(".notice_background");
  closeBtn.addEventListener("click", function () {
    background.classList.add("hidden");
  });
};
closeModal();

const rollActive = function () {
  const roll = document.querySelector(".roll");
  const specRoll = document.querySelector("#tab01");

  roll.addEventListener("click", function () {
    specRoll.style.height = "100%";
    roll.style.display = "none";
  });
};
rollActive();

const qnalistToggle = function () {
  const qnaList = document.querySelector(".qna_list");
  qnaList.addEventListener("click", function (e) {
    const list = e.target.closest("li");
    if (!list) return;

    if (list.querySelector(".answer"))
      list.querySelector(".answer").classList.toggle("active");
  });
};
qnalistToggle();

const starRating = function () {
  const ratings = document.querySelectorAll(".star_counting");
  ratings.forEach((rating) => {
    const starscore = rating.dataset.rate;
    const stars = rating.querySelectorAll(
      `.fa-star:nth-child(-n+${starscore})`
    );
    stars.forEach((star) => (star.style.color = "#f7b541"));
  });
};
starRating();

const productListInfo = document.querySelector(".product_list_info");

const calcTotal = function () {
  const totalPrice = document.querySelector(".total_price");
  const listPrices = productListInfo.querySelectorAll(".price");
  let arr = [];
  listPrices.forEach((listPrice) => {
    arr.push(parseInt(listPrice.innerText.replace(/,/g, "")));
  });

  totalPrice.innerText = arr
    .reduce(function (sum, curValue) {
      return (sum += curValue);
    }, 0)
    .toLocaleString();
};

const select = document.querySelector(`[data-role="selectBox"]`);
const values = select.querySelector(`[data-value="optValue"]`);
const option = select.querySelector("ul");
const opts = option.querySelectorAll("li");

const render = function (opt) {
  const html = `
      <li>
        <h4>삼성 Neo QLED 4K TV KQ75QNA83AFXKR 189cm (75in) <span class="material-symbols-outlined close">
        close
        </span></h4>
        <div class="form_quantity">
          <div class="form">
            <p>${opt}</p>
            <p>배송비<span>+0원</span></p>
          </div>
          <div class="price_qty">
            <h5>
              <span class="price" data-price="3799000"
                >3,799,000</span
              >
              원
            </h5>
            <div class="quantity">
              <button class="minus_btn">
                <span class="material-symbols-outlined minus"
                  >remove</span
                >
              </button>
              <input
                type="text"
                readonly
                value="1"
                class="quantity_count"
              />
              <button class="plus_btn">
                <span class="material-symbols-outlined plus"
                  >add</span
                >
              </button>
            </div>
          </div>
        </div>  
      </li>
    `;

  productListInfo.insertAdjacentHTML("beforeend", html);
  calcTotal();
};

const selectFirst = function () {
  const firstValue = opts[0].innerHTML;
  values.innerHTML = `${firstValue}`;
  render(firstValue);
};

const selectBox = function () {
  select.addEventListener("click", function (e) {
    option.classList.toggle("hide");
    const lists = e.target.closest(".option-list");
    if (lists) {
      const innerValue = lists.innerHTML;
      const changeValue = function () {
        values.innerHTML = innerValue;
      };
      changeValue();
      render(innerValue);
    } else return;
  });
};

const quantityAndClose = function () {
  productListInfo.addEventListener("click", function (e) {
    e.preventDefault();
    const closeBtn = e.target.closest(".close");
    const plusBtn = e.target.closest(".plus_btn");
    const minusBtn = e.target.closest(".minus_btn");

    if (plusBtn) {
      plusBtn.previousElementSibling.value++;
      plusBtn.parentElement.previousElementSibling.childNodes[1].innerText = (
        plusBtn.parentElement.previousElementSibling.childNodes[1].dataset
          .price * plusBtn.previousElementSibling.value
      ).toLocaleString();
    } else if (minusBtn && minusBtn.nextElementSibling.value > 1) {
      minusBtn.nextElementSibling.value--;
      minusBtn.parentElement.previousElementSibling.childNodes[1].innerText = (
        minusBtn.parentElement.previousElementSibling.childNodes[1].dataset
          .price * minusBtn.nextElementSibling.value
      ).toLocaleString();
    } else if (closeBtn) {
      closeBtn.parentElement.parentElement.remove();
    } else {
      return;
    }
    calcTotal();
  });
};

const init = function () {
  selectFirst();
  selectBox();
  quantityAndClose();
  calcTotal();
};
init();
