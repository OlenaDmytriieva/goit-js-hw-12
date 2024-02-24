import { queryPixabay } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { showLoadMoreButton } from './js/render-functions';
import { hideLoadMoreButton } from './js/render-functions';
import { loadMoreBtn } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function showToast(message, type = 'warning') {
  switch (type) {
    case 'warning':
      iziToast.warning({
        title: 'Caution',
        titleColor: '#FFF',
        messageColor: '#FFF',
        message: message,
        backgroundColor: '#FFA000',
        position: 'topRight',
        theme: 'dark',
        timeout: 5000,
      });
      break;
    case 'error':
      iziToast.error({
        title: 'Error',
        titleColor: '#FFF',
        messageColor: '#FFF',
        message: message,
        backgroundColor: '#EF4040',
        position: 'topRight',
        theme: 'dark',
        timeout: 5000,
      });
      break;
    case 'info':
      iziToast.info({
        title: 'Info',
        titleColor: '#FFF',
        messageColor: '#FFF',
        message: message,
        backgroundColor: '#0099FF',
        position: 'topRight',
        theme: 'dark',
        timeout: 5000,
      });
  }
}

const form = document.querySelector('.search-form');
const loaderElement = document.querySelector('.loader');
let page = 0;
let currentQuery = '';
const limit = 15;

async function handleQuery(e) {
  e.preventDefault();
  page++;

  const query = form.querySelector('input').value.trim();
  // check query
  if (!query) {
    showToast(
      'This input field cannot be empty. Please enter your request!',
      'warning'
    );
    return;
  }

  // new query?
  if (query != currentQuery) {
    page = 1;
  }
  currentQuery = query;

  loaderElement.style.display = 'block';
  hideLoadMoreButton();
  const data = await queryPixabay(query, page, limit);
  loaderElement.style.display = 'none';

  if (data.hits.length == 0) {
    showToast(
      'Sorry, there are no images matching your search query. Please try again!',
      'error'
    );
    return;
  }

  createGallery(data.hits, page > 1);
  const totalPages = Math.ceil(data.totalHits / limit);

  if (totalPages === page) {
    showToast(
      "We're sorry, but you've reached the end of search results.",
      'info'
    );
  } else {
    showLoadMoreButton();
  }
}

form.addEventListener('submit', handleQuery);

loadMoreBtn.addEventListener('click', handleQuery);
