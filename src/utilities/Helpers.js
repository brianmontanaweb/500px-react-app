//Using this as a temp fix before I setup a node server to handle the end point requests
import { ApiKey } from './ApiKey';

export function searchPhotos(tag) {
  return fetch(`https://api.500px.com/v1/photos/search?consumer_key=${ApiKey()}&tag=${tag}`)
    .then(response => response.json());
}

export function orderObjectByKey(array, key, bool) {
  return array.sort((a, b) => {
    a = a[key];
    b = b[key];
    return bool ? b - a : a - b;
  })
}
