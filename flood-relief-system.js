/* Confirm before deleting a relief request or user */
function confirmDelete() {
    return confirm("Are you sure you want to delete this?");
}

/* Show a success message dynamically */
function showSuccess(message) {
    // Create a div element for alert
    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-success";
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "20px";
    alertDiv.style.right = "20px";
    alertDiv.style.zIndex = "9999";
    alertDiv.innerText = message;

    document.body.appendChild(alertDiv);

    // Remove after 3 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

/* Example usage: 
   Call this function after form submission in HTML
   <form onsubmit="showSuccess('Request created successfully!')"> 
*/

/* Optional: simple form validation */
function validateForm(formId) {
    const form = document.getElementById(formId);
    let valid = true;

    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach(input => {
        if(input.hasAttribute("required") && input.value.trim() === ""){
            alert("Please fill all required fields!");
            valid = false;
        }
    });

    return valid;
}