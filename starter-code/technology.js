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
            .catch(err => console.log(err.message));


async function displayTechnology(data){
  let techName = document.querySelector('h1');
  let intro = document.querySelector('p.intro');
  let techImg = document.querySelector('img');
  for(let i = 0; i < techs.length; i++){ 
      techs.forEach(() => {
          techs[i].addEventListener('click', () => {
              techName.innerHTML = `${data.technology[i].name}`;
              intro.innerHTML = `${data.technology[i].description}`;
              techImg.setAttribute('src', `${data.technology[i].images.landscape}`) ;
          })
      })
      techs[0].click();
  }
}