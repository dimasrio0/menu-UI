const elementLi = document.querySelectorAll("ul.menu-horizontal li");

for (let i = 0; i < elementLi.length; i++) {
  elementLi[i].addEventListener("click", function (e) {
    for (let j = 0; j < elementLi.length; j++) {
      if (j === i) {
        elementLi[j].classList.add("active");
      } else {
        elementLi[j].classList.remove("active");
      }
    }
  });
}
