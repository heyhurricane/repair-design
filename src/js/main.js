document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  var modalActive = false;

  const switchModal = () => { 
    modal.classList.toggle('modal--visible');
    modalActive = !(modalActive);
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('click', (event) => {
    if (event.target == modal) {
      switchModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key=='Escape' && (modalActive)) {
      switchModal();
    }
  });
});