const listItems = document.querySelectorAll("[data-action='toggle']");

document.addEventListener("click", (event) => {
  const clicked = event.target.closest("[data-action='toggle']");
  if (clicked) {
    handleToggle(clicked);
  }
});

function handleToggle(item) {
  const listItem = item.closest(".list__item");
  listItem.classList.toggle("is-opened");
}