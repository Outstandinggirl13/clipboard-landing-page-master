const historyTitleElement = document.querySelector(".history__title");
const accessTitleElement = document.querySelector(".access__title")
if (window.innerWidth > 750) {
    historyTitleElement.textContent = "A history of everything you copy";
    accessTitleElement.textContent = "Access Clipboard anywhere";
}