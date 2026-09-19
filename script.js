/* =========================
   PORTFOLIO JAVASCRIPT
========================= */

console.log("Portfolio loaded successfully!");



/* =========================
   MOBILE NAVBAR
========================= */

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});



/* =========================
   FORM
========================= */

const questionForm = document.getElementById("questionForm");
const successMessage = document.getElementById("successMessage");

if (questionForm) {
    questionForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = questionForm.querySelector("button[type='submit']");

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        try {
            const response = await fetch(questionForm.action, {
                method: "POST",
                body: new FormData(questionForm),
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                questionForm.reset();
                successMessage.textContent =
                    "Thank you! Your question has been sent successfully.";
            } else {
                successMessage.textContent =
                    "Something went wrong. Please try again.";
            }

        } catch (error) {
            successMessage.textContent =
                "Something went wrong. Please try again.";
        }

        submitButton.disabled = false;
        submitButton.textContent = "Send Question";
    });
}