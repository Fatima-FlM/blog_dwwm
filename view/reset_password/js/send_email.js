let emailForm = new Form("sendEmailForm", "reset_password.php");

emailForm.onPostResolve = function(request) {
    let parsedResponse = JSON.parse(request.responseText);

    switch (parsedResponse["status"]) {
        case "success":
            document.getElementById("successContainer").removeAttribute('hidden');
            document.getElementById("successMessage").removeAttribute('hidden');
            document.getElementById("errorMessage").setAttribute('hidden', true);
            emailForm.form.setAttribute('hidden', true);

            break;

        case "failure":
            document.getElementById("errorMessage").removeAttribute('hidden');
            break;

        default:
            throw new Error("Unexpected status received");
    }
};
