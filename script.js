function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || !email.includes("@")) {
        alert("Please enter a valid name and email.");
        return false;
    }
    return true;
}

