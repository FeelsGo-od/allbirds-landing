export default function nav() {
  let mobileMenu = document.querySelector('.mobile-menu');
  let closeBtn = document.querySelector('.mobile-close');
  let openBtn = document.querySelector('.mobile-open');

  openBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    openBtn.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    openBtn.style.display = 'block';
  });
}
