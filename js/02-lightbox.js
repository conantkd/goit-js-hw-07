import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector("ul.gallery");

galleryItems.forEach((item) => {
  const imgHTML = `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`;

  galleryContainer.insertAdjacentHTML("afterBegin", imgHTML);
});

document.addEventListener("DOMContentLoaded", function () {
  const galleryLightBox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
    document.addEventListener("keydown", (event) => {
      console.log(event.key);
      if (event.key === "Escape") {
        galleryOpen.close();
      }
    });
});

