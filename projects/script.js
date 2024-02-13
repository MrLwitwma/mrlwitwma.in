const search = document.getElementById('search');
const more = document.getElementById('more');
const more_btn = document.getElementById('show-more');
const more_items = document.getElementById('items');
const items_column = document.querySelector('.items-column');
const background = document.getElementById('background');

more_btn.addEventListener('click', ()=>{
    if (more.style.display = 'none'){
        more.style.display = 'flex';
        more_items.style.display = 'flex';
        background.style.display = 'block';
        more_items.classList.add('items-column');
    } else {
        more_items.classList.remove('items-column');
        background.style.display = 'none';
    }
})
background.addEventListener('click', () => {
    if (window.innerWidth <= 720) {
            more.style.display = 'none';
            background.style.display = 'none';
        }
})