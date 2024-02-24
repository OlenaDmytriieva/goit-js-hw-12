import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(images, append) {
  const myGallery = document.querySelector('.gallery');
  const result = images
    .map(image => {
      return `<li class="gallery-item">
                        <div class="box">
                          <a class="gallery-link" href="${image.largeImageURL}">
                            <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" data-likes="${image.likes}" data-views="${image.views}" data-comments="${image.comments}" data-downloads="${image.downloads}"/>
                            <div class="img-card">
                              <div class="img-data">
        <h4 class="data-title">Likes</h4>
        <p class="data-value">
          ${image.likes}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Views</h4>
        <p class="data-value">
          ${image.views}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Comments</h4>
        <p class="data-value">
          ${image.comments}
        </p>
      </div>
      <div class="img-data">
        <h4 class="data-title">Downloads</h4>
        <p class="data-value">
          ${image.downloads}
        </p>
      </div>
                            </div>
                          </a>
                        </div>
                      </li>`;
    })
    .join('\n');

  if (append) {
    myGallery.insertAdjacentHTML('beforeend', result);
  } else {
    myGallery.innerHTML = result;
  }
  const galleryElement = document.querySelector('.box');
  const height = galleryElement.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });

  let gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });

  gallery.on('show.simplelightbox', function () {});
  gallery.refresh();
}

export const loadMoreBtn = document.querySelector('.load-more-button');

export function showLoadMoreButton() {
  loadMoreBtn.style.display = 'block';
}

export function hideLoadMoreButton() {
  loadMoreBtn.style.display = 'none';
}
