"use strict";

const goToTop = function () {
  const section1 = document.querySelector("#business_youtube");
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

  visualObserver.observe(section1);

  goTop.addEventListener("click", function (e) {
    const body = document.querySelector("body");

    e.preventDefault();
    body.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};

goToTop();
