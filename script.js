function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    // Here you would typically send the data to your server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for registering! We will contact you soon.');
    
    // Reset form
    event.target.reset();
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