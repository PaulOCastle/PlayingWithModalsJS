'use strict';

// Document Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openBtns = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal');

// Open Event
for (let i = 0; i < openBtns.length; i++) {
    openBtns[i].addEventListener('click' , openModal);
}

// Close Events
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Functions
function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}