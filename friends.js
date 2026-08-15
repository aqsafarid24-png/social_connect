const acceptButtons = document.querySelectorAll(".accept");
const rejectButtons = document.querySelectorAll(".reject");

// Accept Friend Request
acceptButtons.forEach(button => {
    button.addEventListener("click", function () {

        this.innerHTML = "✓ Friends";
        this.style.background = "#42b72a";
        this.disabled = true;

        const rejectBtn = this.nextElementSibling;
        rejectBtn.style.display = "none";

    });
});

// Reject Friend Request
rejectButtons.forEach(button => {
    button.addEventListener("click", function () {

        const card = this.closest(".friend-card");

        card.style.opacity = "0";

        setTimeout(() => {
            card.remove();
        }, 300);

    });
});