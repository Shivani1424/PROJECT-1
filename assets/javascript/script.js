 $(document).ready (function(){

       $("#btn2").click(function(){
           $("#leftcol header").text("LOG IN HERE");
           $("#leftcol #envelope").text("");
       });
 });

 function showError(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var errorBox = document.createElement("div");
    errorBox.className = "error-box";
    errorBox.innerHTML = message;

    // Calculate position dynamically
    var rect = inputElement.getBoundingClientRect();
    errorBox.style.top = rect.top + window.scrollY + inputElement.offsetHeight + 5 + "px";
    errorBox.style.left = rect.left + window.scrollX + "px";

    document.body.appendChild(errorBox);

    // Automatically remove the error box after 2 seconds
    setTimeout(function () {
        errorBox.remove();
    }, 2000);
};



 function validateform() {
   var name = document.getElementById("name").value;
   var password = document.getElementById("password").value;
   var email = document.getElementById("email").value;

   document.getElementById("nameerror").innerHTML = "";
   document.getElementById("passerror").innerHTML = "";
   document.getElementById("emailerror").innerHTML = "";

   if (name === "") {
    showError("name", "Please enter your name.");
       return false;
   }

   if (password.length < 8) {
    showError("name", "Please enter the password");
       return false;
   }

   var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if (!emailRegex.test(email)) {
    showError("name", "Please enter a valid email");
       return false;
   }

   return true;
};
