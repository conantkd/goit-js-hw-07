import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector("ul.gallery");

galleryItems.forEach((item) => {
  const imgHTML = `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
  galleryContainer.insertAdjacentHTML("afterBegin", imgHTML);
});

galleryContainer.addEventListener("click", (event) => {
    event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const galleryOpen = basicLightbox.create(`
    <img src="${event.target.getAttribute(
      "data-source"
    )}" alt="${event.target.getAttribute("alt")}" />
  `);

      galleryOpen.show();
      document.addEventListener("keydown", (event) => {
        console.log(event.key);
        if (event.key === "Escape") {
          galleryOpen.close();
        }
      });
  }
});

