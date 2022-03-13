

 function dropMenuInit() {
           let menuButton = document.querySelector('.ham');
           menuButton.addEventListener('click', () => {
           let hamNavMenu = document.createElement('div');
           hamNavMenu.classList.add('hamNavMenu');
           hamNavMenu.innerHTML = `<svg class="close" xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>  
                                    <a class="hamLinks" href="index.html"> <b>00</b>  HOME</a></br>
                                    <a class="hamLinks" href="destination.html"> <b>01</b>  DESTINATION</a></br>
                                    <a class="hamLinks" href="crew.html"> <b>02</b>  CREW</a></br>
                                    <a class="hamLinks" href="technology.html"> <b>03</b>  TECHNOLOGY</a> </br>      
                                    `;
           document.body.appendChild(hamNavMenu);
           menuButton.setAttribute('style', 'visibility: hidden');
       function closeMenuInit() {
                let closeBtn = document.querySelector('.close');
                closeBtn.addEventListener('click', () => {
                document.body.removeChild(hamNavMenu);
                menuButton.setAttribute('style', 'visibility: visible')
                })
           }
           closeMenuInit();

          })
 
        }


dropMenuInit();

export default {dropMenuInit};