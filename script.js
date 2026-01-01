

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Change icon
    const icon = darkModeToggle.querySelector('i');
    if (body.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }

    // Save preference
    localStorage.setItem('darkMode', body.classList.contains('dark'));
});

// Load saved preference
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark');
    darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}