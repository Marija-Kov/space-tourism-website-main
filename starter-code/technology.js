let techs = document.querySelectorAll('.tech');

fetch('data.json')
            .then(response => {
            if(!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }else{
              return response.json();
            }
            }) 
            .then(json => displayTechnology(json))
            .then(initRadioFadeIn)
            .catch(err => console.log(err.message));


async function displayTechnology(data){
  let techName = document.querySelector('h1');
  let description = document.querySelector('.description');
  let techImgHor = document.querySelector('.hor');
  let techImgVer = document.querySelector('.ver');
  for(let i = 0; i < techs.length; i++){ 
      techs.forEach(() => {
          techs[i].addEventListener('click', () => {
              techName.innerHTML = `${data.technology[i].name}`;
              description.innerHTML = `${data.technology[i].description}`;
              techImgHor.setAttribute('src', `${data.technology[i].images.landscape}`) ;
              techImgVer.setAttribute('src', `${data.technology[i].images.portrait}`) ;
          })
      })
      techs[0].click();
  }
}

async function initRadioFadeIn(){
    techs.forEach(tech=>{
      tech.addEventListener('click', ()=>{
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