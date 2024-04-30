const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
    createHeart(e);
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fa-solid', 'fa-heart');
    heart.style.fontSize = '15px'; // Adjust the font size as desired

    const rect = loveMe.getBoundingClientRect(); // Get dimensions and position of .loveMe relative to viewport

    const xInside = e.clientX - rect.left; // Calculate x coordinate relative to .loveMe
    const yInside = e.clientY - rect.top; // Calculate y coordinate relative to .loveMe

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);
    times.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000);
};

