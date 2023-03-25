import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Використовуй готовий код з першого завдання.

const gallerySection = document.querySelector(".gallery");
// console.log(gallerySection);

const galleryItemsEl = galleryItems
  .map(
    (item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
  </a>
</li>`
  )
  .join("");
// console.log(galleryItemsEl);

gallerySection.insertAdjacentHTML("beforeend", galleryItemsEl);

// 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
// Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.

// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery.
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt.
// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
