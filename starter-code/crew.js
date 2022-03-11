
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
   let bio = document.querySelector('.bio');
   let img = document.querySelector('.crew');
        radioBs.forEach(radioB => { 
            for(let i = 0; i < radioBs.length; i++) 
            radioB.addEventListener('click', () => {
            role.innerHTML =`${radioB.getAttribute('id')}`;
            bio.innerHTML = `${data.crew[i].bio}`;
            img.setAttribute('src', `${data.crew[i].png}` )
                  
                })
              
              })
}