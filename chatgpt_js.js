let btn = document.getElementById("btn")

let about = document.getElementById("about");

if (btn && about) {
    console.log("Explore button clicked")
    btn.addEventListener("click", function () {
        if (about.style.display === "none") {
            about.style.display = "block";
            btn.textContent = "Hide explore more";
        } else {
            about.style.display = "none";
            btn.textContent = "Explore more "
        }
    })
}
let contact = document.querySelector(".contact form");
contact.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("Name").value;
    let email = document.getElementById("email").value;
    let Sub = document.getElementById("Sub").value;
    let message = document.getElementById("message").value;


    console.log("thank you ")
    let nameError = document.getElementById("nameError")
    let emailError = document.getElementById("emailError");
    let subError = document.getElementById("subError")
    let messageError = document.getElementById("messageError");


    if (name == "") {
        nameError.style.display = "block";
        nameError.textContent = "Please enter name";
    } else {
        nameError.style.display = "none";
    }

    if (email == "" || !email.includes('@') || !email.includes('.')) {
        emailError.style.display = "block";
        emailError.textContent = "Please enter valid email"
    } else {
        emailError.style.display = "none";
    }

    if (Sub == "") {
        subError.style.display = "block";
        subError.textContent = "Please enter subject";
    } else {
        subError.style.display = "none";
    }

    if (message == "") {
        messageError.style.display = "block";
        messageError.textContent = "Please enter message";
    } else {
        messageError.style.display = "none";
    }
});
