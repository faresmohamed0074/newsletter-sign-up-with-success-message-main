document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("form input");
  const btn = document.querySelector("a");
  const validp = document.querySelector(".valid");
  const reg = /\w+@\w+\.\w+/;

  btn.addEventListener("click", function (event) {
     // Prevent the default behavior of the anchor tag

    const inputValue = input.value;

    if (!reg.test(inputValue)) {
      input.style.backgroundColor = "var(--Tomato)";
        validp.classList.remove("hide");
        event.preventDefault();
    } else {
      input.style.backgroundColor = "white";
      validp.classList.add("hide");
    }
  });
});

