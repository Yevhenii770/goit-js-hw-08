import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('.gallery');
const gallaryMarkup = createGalaryMarkup(galleryItems);


function createGalaryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('')
};

galleryDiv.insertAdjacentHTML('beforeend', gallaryMarkup);



let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250'});
gallery.on('show.simplelightbox', function () {
	// Do something…
});