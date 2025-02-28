document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const nowPlaying = document.querySelector('.current-track .card');
        nowPlaying.innerHTML = card.innerHTML;
    });
});

// Toggle play/pause button
document.querySelector('.play-pause').addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-play')) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
});

// Simulate progress bar movement
let progress = 0;
setInterval(() => {
    progress = (progress + 1) % 100;
    document.querySelector('.progress').style.width = `${progress}%`;
    
    // Update current time
    const currentMinutes = Math.floor((progress * 3.75) / 100);
    const currentSeconds = Math.floor(((progress * 3.75) / 100 % 1) * 60);
    document.querySelector('.current-time').textContent = 
        `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
}, 1000);

// Add active states for shuffle and repeat buttons
document.querySelectorAll('.shuffle, .repeat').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
