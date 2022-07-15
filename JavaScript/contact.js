 
 /*Function for form validation*/
 function validation()
 {
       var name = document.forms["MessageForm"] ["yourname"]. value;
       var email = document.forms["MessageForm"] ["youremail"]. value;
       var message= document.forms["MessageForm"] ["feedback"]. value;
        if (name == "" || email == "" || message == "" ) {
            alert("Empty field found!")
        } 
        else{
            alert("Thank you for your feedback.")
        }
 }
