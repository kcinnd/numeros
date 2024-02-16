document.addEventListener('DOMContentLoaded', function() {
    var numberElement = document.getElementById('number'); // Get the element with ID 'number'

    // Set initial number to 0
    numberElement.textContent = '0';

    // Change the number to 2 upon click
    numberElement.addEventListener('click', function() {
        this.textContent = '2';
    });
});
