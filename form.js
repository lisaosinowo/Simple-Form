function animatedForm() {
    const arrows = document.querySelectorAll(".fa-solid fa-arrow-right")

    arrows.forEach(arrow => { // For each arrow in the form, a function will run 
        arrow.addEventListener("click" , () => {
             // An event listener will be attached to each arrow of the form 
             const input = arrow.previousElementSibling; // This will take the current input
             const parent = arrow.parentElement;
             const nextForm = parent.nextElementSibling;

             // Checking for validation
             if(input.type === "text" && validateUser(input)){ // If the input is the username and the length has been validated to be true, the next form appears
                nextSlide(parent, nextForm);
             } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
             } else if (input.type === "password" && validateUser(input)) { // If the input is the username and the length has been validated to be true, the next form appears
                nextSlide(parent, nextForm);
             } else {
                parent.style.animation = "shake 0.5s ease"; // If any of the prior inputs are incorrect then the bar will do the error shake
             }
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6){
        console.log("Not enough characters.");
        error("rgb(189,87,87"); // Red screen
    } else {
        error("rgb(87,189,130"); // Green screen
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // This checks if the email has the email essentials e.g the @ sign
    if(validation.test(email.value)) {
        error("rgb(87,189,130"); // Green screen
        return true;
    } else {
        error("rgb(189,87,87"); // Red screen
    }

}

function error(colour){
    document.body.style.backgroundColor = colour;
}

function nextSlide(parent, nextForm){
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");

}

animatedForm();