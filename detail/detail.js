import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
window.addEventListener('load', async () => {

  const data = new URLSearchParams(window.location.search);
  const getDogId = data.get('id');

  const theDog = await getDog(getDogId);

  const dogEl = renderDogDetail(theDog);

  dogDetailContainer.append(dogEl);

});
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
