import { queryPixabay } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { showLoadMoreButton } from './js/render-functions';
import { hideLoadMoreButton } from './js/render-functions';
import { loadMoreBtn } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loaderElement = document.querySelector('.loader');

let page = 1;
let limit = 15;
let totalPages;
let currentQuery = '';

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = form.querySelector('input').value.trim();

  if (query) {
    loaderElement.style.display = 'block';
    if (currentQuery !== query) {
      page = 1;
    }
    currentQuery = query;

    try {
      const data = await queryPixabay(query, page, limit);
      const images = data.hits;
      totalPages = Math.ceil(data.totalHits / limit);
      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          titleColor: '#FFF',
          messageColor: '#FFF',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#EF4040',
          position: 'topRight',
          theme: 'dark',
          timeout: 5000,
        });
      } else {
        createGallery(images, false);
        loaderElement.style.display = 'none';
        if (page === totalPages) {
          hideLoadMoreButton();
          iziToast.info({
            title: 'Info',
            titleColor: '#FFF',
            messageColor: '#FFF',
            message:
              "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
            backgroundColor: '#0099FF',
            theme: 'dark',
            timeout: 5000,
          });
        } else {
          showLoadMoreButton();
        }
      }
    } catch (error) {
      console.error('Error:', error);
      loaderElement.style.display = 'none';
    }
  } else {
    iziToast.warning({
      title: 'Caution',
      titleColor: '#FFF',
      messageColor: '#FFF',
      message: 'This input field cannot be empty. Please enter your request!',
      backgroundColor: '#FFA000',
      position: 'topRight',
      theme: 'dark',
      timeout: 5000,
    });
    loaderElement.style.display = 'none';
  }
});

loadMoreBtn.addEventListener('click', async () => {
  loaderElement.style.display = 'block';
  hideLoadMoreButton();
  page++;

  try {
    const data = await queryPixabay(currentQuery, page, limit);
    const images = data.hits;

    if (images.length > 0) {
      createGallery(images, true);
      showLoadMoreButton();

      if (page === totalPages) {
        hideLoadMoreButton();
        iziToast.info({
          title: 'Info',
          titleColor: '#FFF',
          messageColor: '#FFF',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
          backgroundColor: '#0099FF',
          theme: 'dark',
          timeout: 5000,
        });
      }
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loaderElement.style.display = 'none';
  }
});
