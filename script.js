(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const path = location.pathname.replace(/\/+/g,'/');
  document.querySelectorAll('.nav-list a').forEach(a => {
    if (a.getAttribute('href') && path.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
      a.setAttribute('aria-current','page');
    }
  });

  const toggle = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-list');
  if (toggle && list){
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
})();