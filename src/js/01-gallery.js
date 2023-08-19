import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryDiv = document.querySelector('.gallery');
const gallaryMarkup = createGalaryMarkup(galleryItems);

galleryDiv.addEventListener('click', onGallaryClick);
galleryDiv.insertAdjacentHTML('beforeend', gallaryMarkup);


function createGalaryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${preview}">
        <img
      class="gallery__image"
      src="${original}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`
    }).join('')
};


function onGallaryClick(event) {
  event.preventDefault();
  
  const isGallarySwatchEl = event.target.classList.contains('gallery__image');
  if (!isGallarySwatchEl) {
    return;
  };

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  

  instance.show();
  
  function onEscClose(event) {
    if (event.key === 'Escape') {
      instance.close();
    };
};

  if (instance.visible()) {
    window.addEventListener('keydown', onEscClose);
  } if (!instance.visible()) {
    window.removeEventListener('keydown', onEscClose);
  }

}
