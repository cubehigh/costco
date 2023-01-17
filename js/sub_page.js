"use strict";

const rolling = document.querySelector("#rolling");
const lists = rolling.querySelectorAll("li");
const listCount = lists.length;
let currentIdx = 0;

const moveList = function (num) {
  rolling.style.transform = `translateY(-${num * 100}%)`;
  currentIdx = num;
  // console.log(currentIdx, listCount - 1);

  if (currentIdx === listCount - 1) currentIdx = -1;
};

setInterval(function () {
  moveList(currentIdx + 1);
}, 2000);
