import axios from 'axios';

export async function queryPixabay(query, page, limit) {
  return await axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '42368868-12588a31d2c2b3196976be5e8',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: limit,
        page: page,
      },
    })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Network response is not ok');
      }
      return response.data;
    });
}
