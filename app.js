const historyTitleElement = document.querySelector(".history__title");
const accessTitleElement = document.querySelector(".access__title")

// when the websites loads
if (window.innerWidth > 750) {
    accessTitleElement.textContent = "Access Clipboard anywhere";
}

// when the user resizes window
window.addEventListener("resize", () => {
    if (window.innerWidth > 750) {
        accessTitleElement.textContent = "Access Clipboard anywhere";
    } else {
        accessTitleElement.textContent = "Access Clipboard Anywhere";
    }
  });