// Save Account

const saveAccount = document.getElementById("saveAccount");

saveAccount.addEventListener("click", function () {

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;

    if (name.trim() === "" || email.trim() === "") {

        alert("Please fill all account fields.");

        return;
    }

    alert("Account settings saved successfully! ✅");

});


// Dark Mode

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("change", function () {

    if (this.checked) {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

});


// Change Password

const changePassword =
    document.getElementById("changePassword");

changePassword.addEventListener("click", function () {

    alert("Password change feature will be connected with authentication later.");

});


// Logout

const logoutBtn =
    document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        window.location.href = "/";

    }

});