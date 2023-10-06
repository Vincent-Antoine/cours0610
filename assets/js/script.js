
//cible l'element btn pour ouvrir la modal
const btnOpen = document.querySelector('#btnOpen');


//cible l'element modal qui porte la class modalContainer
const modal = document.querySelector('.modalContainer');

//cible l'element btn pour fermer la modal
const btnClose = document.querySelector('#btnClose');


function openModal(){
    //dans l'element modal utilise la function classlist pour enelver le string de displayNone de l'attribut class
    modal.classList.remove('displayNone')
}

//alerte au click sur btnOpen
btnOpen.addEventListener('click', openModal);

// fonction pr rajouter le displayNone
function closeModal(){
    modal.classList.add('displayNone')
}

//appel du closemodal au click sur btnClose
btnClose.addEventListener('click', closeModal)
