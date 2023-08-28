window.addEventListener("keydown", (e) => {
  document.getElementById("mainTitle")!.classList.remove("active");
  document.getElementById("keyInfoContainer")!.classList.add("active");
  document.querySelector(".key")!.textContent = e.key;
  document.querySelector(".keyCode")!.textContent = e.keyCode.toString();
  document.querySelector(".code")!.textContent = e.code;
});
