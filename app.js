import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// fetch all dogs

window.addEventListener('load', async () => {

  const theDogs = await getDogs();

  for (let dog of theDogs) {
    const dogEl = renderDogCard(dog);

    dogListContainer.append(dogEl);
  }

});
// render and append all dog cards to the container
