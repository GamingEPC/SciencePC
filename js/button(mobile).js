function toggleMenu() {
    const menu = document.querySelector('.bottom-links');
    const button = document.querySelector('.menu-toggle');
    
    menu.classList.toggle('open');
    menu.classList.toggle('hidden');
    
  
    button.classList.toggle('open');
  }
  
  
  function closeMenu(event) {
    const menu = document.querySelector('.bottom-links');
    if (!event.target.closest('.bottom-links') && !event.target.closest('.menu-toggle')) {
      menu.classList.add('hidden');
      menu.classList.remove('open');
      document.querySelector('.menu-toggle').classList.remove('open');
    }
  }
  
 
  document.addEventListener('click', closeMenu);