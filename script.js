var item, places;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


places = ['Drive a Cobra to Groot Constantia for a picnic', 'Swim in a tidal pool', 'Go hiking and swim in a waterfall', 'Abseil from the summit of Table Mountain', 'Visit a farmers’ market', 'Visit a night market', 'Cycle along the promenade', 'Hike with your hound'];


document.getElementById('btn').addEventListener('click', (event) => {
  places.forEach((item) => {
    let element_places = document.getElementById('places');
    element_places.innerText = randomMember(places);
  });

});


document.getElementById('jsbutton').addEventListener('click', (event) => {
    event.target.replaceChildren();
    event.target.innerText = 'Yaaay!!!';
  
  });