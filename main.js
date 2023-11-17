import './scss/style.scss';

const btnOpen = document.querySelector('#btnOpen');
const media = window.matchMedia('(width < 69.375em)');

function openMobileMenu() {
    console.log('open menu');

    btnOpen.setAttribute('aria-expanded', 'true');
}

btnOpen.addEventListener('click', openMobileMenu);

media.addEventListener('change', function(e){
    console.log('window.matchMedia change = ' + e.matches);
})


