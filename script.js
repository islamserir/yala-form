function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    // Replace this URL with the one you copied
    fetch('https://script.google.com/macros/s/AKfycbwNTkYQ58e5xJ-lIOguAafabT_kfiFL-vmZpP_O9i9iZpR_aa6mfvsDb9C-OaQ5VMoc/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        mode: 'no-cors'
    })
    .then(() => {
        showSuccessMessage('Thank you for registering! We will contact you soon.');
        document.getElementById('registrationForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const decoration = document.querySelector('.decoration');
    
    // Remove existing airplanes
    decoration.innerHTML = '';
    
    // Create 50 airplanes (reduced from 100 for better performance)
    for (let i = 0; i < 50; i++) {
        const airplane = document.createElement('div');
        airplane.className = 'airplane';
        
        // Set random custom properties
        airplane.style.setProperty('--i', Math.random() * 50);
        airplane.style.setProperty('--y', Math.random() * 100);
        airplane.style.setProperty('--rotate', `${Math.random() * 45 - 22.5}deg`); // Limit rotation angle
        
        decoration.appendChild(airplane);
    }

    // Find your image element
    const heisenburgImage = document.querySelector('.image-container img');

    // Add load event listener
    heisenburgImage.addEventListener('load', function() {
        this.classList.add('loaded');
    });

    // Make sure the src is set correctly
    heisenburgImage.src = './heisnburg.png';
});

function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
    
    // Handle images in the newly shown tab
    const tabImages = selectedTab.querySelectorAll('.image-container img');
    tabImages.forEach(img => {
        img.classList.remove('loaded');
        // Trigger reflow
        void img.offsetWidth;
        img.classList.add('loaded');
    });
}

function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.transform = 'translateX(200%)';
        setTimeout(() => messageDiv.remove(), 500);
    }, 3000);
}

function addCountdownTimer() {
    const eventDate = new Date('December 1, 2024 08:00:00').getTime();
    const timerDiv = document.createElement('div');
    timerDiv.className = 'countdown-timer';
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        timerDiv.innerHTML = `Event starts in: ${days}d ${hours}h`;
    }, 1000);
    
    document.querySelector('.event-details').prepend(timerDiv);
} 