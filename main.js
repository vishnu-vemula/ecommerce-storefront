const menuToggle = document.querySelector(".nav__toggle");
const menu = document.querySelector("#nav-menu");
const cartCount = document.querySelector(".cart-count");
let itemsInCart = 0;

menuToggle?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    itemsInCart += 1;
    cartCount.textContent = itemsInCart;
    document.querySelector(".nav__cart").setAttribute("aria-label", `Shopping bag, ${itemsInCart} items`);
    button.setAttribute("aria-label", `${button.dataset.product} added to cart`);
    button.innerHTML = '<i class="bx bx-check" aria-hidden="true"></i>';
    window.setTimeout(() => {
      button.innerHTML = '<i class="bx bx-plus" aria-hidden="true"></i>';
      button.setAttribute("aria-label", `Add ${button.dataset.product} to cart`);
    }, 1200);
  });
});

document.querySelector(".newsletter__form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector(".form-message");
  message.textContent = "Thanks for subscribing.";
  event.target.reset();
});
