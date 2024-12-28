 $(document).ready (function(){

       $("#btn2").click(function(){
           $("#leftcol header").text("LOG IN HERE");
           $("#leftcol #envelope").text("");
       });
 });


 function validateform(){
   var name = document.getElementById("name").value;
   var password = document.getElementById("password").value;
   var email = document.getElementById("email").value;


   document.getElementById("nameerror").innerHTML = "";
    document.getElementById("passerror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";


     if(name ==""){
        document.getElementById("nameerror").innerHTML = "*Required"
        return false;
     }

     if("password.length < 8"){
        document.getElementById("passerror").innerHTML = "Password should contain mimimum 8 characters";
        return false;
     }


     var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

     if(emailRegex.test(email)){
        document.getElementById("emailerror").innerHTML ="Please enter a valid email";
        return false;
     }

      return true;

 };