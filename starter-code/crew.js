
fetch('data.json')
            .then(response => {
            if(!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }else{
              return response.json();
            }
            }) 
            .then(json => {createRadioGroup(json).then(displayCrewMember(json))})  
            .catch(err => console.log(err.message));


async function createRadioGroup(data){
   let radioGroup = document.createElement('p');
   radioGroup.setAttribute('id','radio-group');
   for(let i = 0; i < data.crew.length; i++){
               radioGroup.innerHTML += `<input label="${data.crew[i].role}" 
                                         type="radio" id="${data.crew[i].role}" 
                                         name="crew" value="${data.crew[i].role}"/>`;
              }
              document.body.appendChild(radioGroup)
}

async function displayCrewMember(data){
   let radioBs = document.querySelectorAll('input');
   let role = document.querySelector('.role');
   let name = document.querySelector('.name');
   let bio = document.querySelector('.bio');
   let img = document.querySelector('.crew');
   for(let i = 0; i < radioBs.length; i++){ 
        radioBs.forEach(() => { 
            radioBs[i].addEventListener('click', () => {
            role.innerHTML =`${radioBs[i].getAttribute('id')}`;
            name.innerHTML = `${data.crew[i].name}`;
            bio.innerHTML = `${data.crew[i].bio}`;
            img.setAttribute('src', `${data.crew[i].images.png}` )
                  
                })
       
              })
    radioBs[0].click();
            }          
}