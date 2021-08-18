const modal = document.querySelector('#exampleModal');
const openButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close-modal');


function open(){
	modal.classList.add('modal-open');
};

function close() {
	modal.classList.remove('modal-open');
};

openButtons.forEach(openButton => openButton.addEventListener('click', open));
closeButtons.forEach(closeButton => closeButton.addEventListener('click', close));