// set year
document.getElementById('year').textContent = new Date().getFullYear();

// panes and tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const panes = {
  home: document.getElementById('home-pane'),
  services: document.getElementById('services-pane'),
  work: document.getElementById('work-pane'),
  about: document.getElementById('about-pane'),
  contact: document.getElementById('contact-pane')
};

function activateTab(name){
  tabButtons.forEach(b => b.classList.toggle('active', b.dataset.tab === name));
  Object.keys(panes).forEach(k => panes[k].classList.toggle('active', k === name));
  window.scrollTo({top:0, behavior:'smooth'});
}

tabButtons.forEach(btn => btn.addEventListener('click', () => activateTab(btn.dataset.tab)));

// footer links
function switchTo(tabName){ activateTab(tabName); }

// CTAs
document.querySelectorAll('[data-action="open-contact"]').forEach(el => el.addEventListener('click', () => activateTab('contact')));
document.querySelectorAll('[data-action="open-services"]').forEach(el => el.addEventListener('click', () => activateTab('services')));

// marquee pause on hover
const marqueeWrap = document.getElementById('marqueeWrap');
const marqueeTrack = document.getElementById('marqueeTrack');
if(marqueeWrap && marqueeTrack){
  marqueeWrap.addEventListener('mouseenter', () => marqueeTrack.style.animationPlayState = 'paused');
  marqueeWrap.addEventListener('mouseleave', () => marqueeTrack.style.animationPlayState = 'running');
}

// contact form basic demo
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      alert('Please complete all fields.');
      return;
    }
    alert('Thanks, ' + name + '! We received your message and will be in touch.');
    form.reset();
    activateTab('home');
  });
}

// init
activateTab('home');
