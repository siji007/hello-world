const openme = document.getElementById('openme');
const closeme = document.getElementById('closeme');
const moda_container = document.getElementById('modal_container');
openme.addEventListener('click',()=>{
    moda_container.classList.add('show');
});
closeme.addEventListener('click',()=>{
    moda_container.classList.remove('show');
});