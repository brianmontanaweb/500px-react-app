export function DogBreeds() {
  return 'https://dog.ceo/api/breeds/list/all';
}

export function DogImages(breed) {
  return `https://dog.ceo/api/breed/${breed}/images`;
}