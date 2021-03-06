
let dests = document.querySelectorAll('.dest');

fetch('data.json')
            .then(response => {
            if(!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }else{
              return response.json();
            }
            }) 
            .then(json => displayDestination(json))
            .then(initRadioFadeIn)
            .catch(err => console.log(err.message));


async function displayDestination(data) {
    let destName = document.querySelector('h1');
    let description = document.querySelector('p.description');
    let distance = document.querySelector('#dist');
    let travelTime = document.querySelector('#time');
    let destImg = document.querySelector('.destImg');
    for(let i = 0; i < dests.length; i++){    
  dests.forEach(() => {
      dests[i].addEventListener('click', () => { 
          destName.innerHTML = `${data.destinations[i].name}`;
          description.innerHTML = `${data.destinations[i].description}`;
          distance.innerHTML = `${data.destinations[i].distance}`;
          travelTime.innerHTML = `${data.destinations[i].travel}`;
          destImg.setAttribute('src', `${data.destinations[i].images.png}`);
      })
  })
  dests[0].click();
 
  
}
}

 async function initRadioFadeIn(){
    dests.forEach(dest=>{
      dest.addEventListener('click', ()=>{
        let fadeEls = document.querySelectorAll('.fade');
        fadeEls.forEach(fadeEl => { 
         if (fadeEl.classList.contains('celest')){
            fadeEl.classList.remove('celest')
         }else if (!fadeEl.classList.contains('celest')){
                   fadeEl.classList.add('celest')
    } 
    })  
    })
    })
  }


import dropMenuInit from './hamburgerMenu.js';

