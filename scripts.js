// Function to smoothly scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to display an alert when a project is clicked
document.querySelectorAll('#projects ul li').forEach(project => {
    project.addEventListener('click', function () {
        alert(`You clicked on project: ${this.textContent}`);
    });
});
