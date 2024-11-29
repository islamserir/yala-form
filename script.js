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
        alert('Thank you for registering! We will contact you soon.');
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
    
    // Create 100 airplanes
    for (let i = 0; i < 100; i++) {
        const airplane = document.createElement('div');
        airplane.className = 'airplane';
        
        // Set random custom properties
        airplane.style.setProperty('--i', Math.random() * 100);
        airplane.style.setProperty('--y', Math.random() * 100);
        airplane.style.setProperty('--size', Math.random());
        airplane.style.setProperty('--rotate', `${Math.random() * 360}deg`);
        airplane.style.setProperty('--shift', `${(Math.random() - 0.5) * 200}px`);
        
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