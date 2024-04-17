document.addEventListener('DOMContentLoaded', function() {
    const placeholders = document.querySelectorAll('.placeholder');

    placeholders.forEach(placeholder => {
        const input = placeholder.previousElementSibling;

        input.addEventListener('input', function() {
            if (input.value !== '') {
                placeholder.style.display = 'none';
            } else {
                placeholder.style.display = 'block';
            }
        });
    });

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = 'Request submitted';
        confirmationMessage.style.color = 'green';
        form.parentNode.insertBefore(confirmationMessage, form.nextSibling);

        form.reset();
        placeholders.forEach(placeholder => {
            placeholder.style.display = 'block';
        });
    });
});

const promoDetails = [{
    title: "2 for 1 promo", description: "We are giving away one Swerve Redux for every Swerve Classic bought!"

}
];

document.getElementById("deals-button").addEventListener("click",function() {
    const promo = promoDetails[0];
    alert(promo.description);

});