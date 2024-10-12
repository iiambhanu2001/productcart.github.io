let dropdownVisible = false;

const button = document.getElementById('quantityBtn');
const dropdown = document.getElementById('quantityDropdown');
const quantityDisplay = document.getElementById('quantity');

// Toggle dropdown visibility when button is clicked
button.addEventListener('click', function() {
    dropdownVisible = !dropdownVisible;
    dropdown.classList.toggle('hidden', !dropdownVisible);
});

// Update quantity when an option is clicked
dropdown.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const selectedQuantity = event.target.getAttribute('data-value');
        quantityDisplay.innerText = selectedQuantity;
        dropdownVisible = false;
        dropdown.classList.add('hidden');
    }
});

// Hide dropdown if clicked outside
document.addEventListener('click', function(event) {
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdownVisible = false;
        dropdown.classList.add('hidden');
    }
});

function changeImage(img){
    document.getElementById ("big-image").src=img;

}



