
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

const texts = [
    "WEB DEVELOPER",
    "FULL STACK DEVELOPER"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;


const paragraph = document.querySelector('.about-container p');
let isHovered = false;
let scrollInterval;

function autoScroll() {
    if (!isHovered) {
        paragraph.scrollTop += 1; 
        if (paragraph.scrollTop >= (paragraph.scrollHeight - paragraph.offsetHeight)) {
            paragraph.scrollTop = 0; 
        }
    }
}

function startAutoScroll() {
    scrollInterval = setInterval(autoScroll, 50); 
}

function stopAutoScroll() {
    clearInterval(scrollInterval); 
}

paragraph.addEventListener('mouseenter', () => {
    isHovered = true; 
    stopAutoScroll();
});

paragraph.addEventListener('mouseleave', () => {
    isHovered = false; 
    startAutoScroll();
});

startAutoScroll();

document.getElementById('show-more').addEventListener('click', function() {
    const additionalWork = document.getElementById('additional-work');
    const showMoreButton = document.getElementById('show-more');
    const showLessButton = document.getElementById('show-less');

    
    additionalWork.style.display = 'block';
    showMoreButton.style.display = 'none';
    showLessButton.style.display = 'block';
});

document.getElementById('show-less').addEventListener('click', function() {
    const additionalWork = document.getElementById('additional-work');
    const showMoreButton = document.getElementById('show-more');
    const showLessButton = document.getElementById('show-less');
    additionalWork.style.display = 'none';
    showMoreButton.style.display = 'block';
    showLessButton.style.display = 'none';
});
