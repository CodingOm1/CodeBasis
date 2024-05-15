function toggleMenu() {
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    hamburgerIcon.classList.toggle('cross');

    var menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');

}
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const details = card.querySelector('.details');
      if (details.style.display === 'block') {
        details.style.display = 'none';
      } else {
        closeAllDetails();
        details.style.display = 'block';
      }
    });
  });
  
  function closeAllDetails() {
    document.querySelectorAll('.details').forEach(details => {
      details.style.display = 'none';
    });
}


