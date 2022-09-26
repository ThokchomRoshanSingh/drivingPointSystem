const menuBtn = document.querySelector(".bar")
const menuContent = document.querySelector(".menu-content")
const closeBtn = document.querySelector(".close")

menuBtn.addEventListener("click", () => {
    menuContent.classList.add('open')
});

closeBtn.addEventListener("click", () => {
    menuContent.classList.remove('open');
});

