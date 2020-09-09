let passwordForm = new PasswordForm("resetPasssword", "reset_password.php");

passwordForm.onPostResolve = function(request) {
    let parsedResponse = JSON.parse(request.responseText);

    switch (parsedResponse["status"]) {
        case "success":
            document.getElementById("successContainer").style.display = "flex";
            document.getElementById("errorMessage").style.display = "none";
            passwordForm.form.style.display = "none";
            break;

        case "failure":
            document.getElementById("errorMessage").style.display = "flex";
            break;

        default:
            throw new Error("Unexpected status received");
    }
};