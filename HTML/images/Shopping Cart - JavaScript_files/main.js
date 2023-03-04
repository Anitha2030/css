const links = document.querySelectorAll('.nav li a');
const currentPage = window.location.href;
links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active_page');
  }
});
