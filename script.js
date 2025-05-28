        var errormessage = "";
        var missingfields = "";
        
        // Function to check if the email is valid
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }   

        $("#submit").click(function(){
            
            if($("#Email").val() == ""){
                missingfields += "<p> Email is required. </p>";
                
            }
            if($("#phoneno").val() == ""){
                missingfields += "<p> Phone number is required. </p>";
                
            }
            if($("#pass").val() == ""){
                missingfields += "<p> Password is required. </p>";
                
            }
            if($("#confirmpass").val() == ""){
                missingfields += "<p> Confirm Password is required. </p>";
               
            }

            // checking if email is correct or not
            if(isEmail($("#Email").val()) == false){
                errormessage += "<p> Please enter a valid email address.</p>";
                
            }

            //confirming that phone number is 10 digits, not empty, and is a number
            if($("#phoneno").val()){
                if($.isNumeric($("#phoneno").val()) == false ) {
                    errormessage += "<p> Phone number should be a number. </p>";
                   
                }
            } 

            //checking weather password and confirm password is sameor not
            if($("#pass").val() != $("#confirmpass").val()){
                errormessage += "<p> Password and Confirm Password should be same. </p>";
            
            }
            if(errormessage == "" && missingfields == ""){
                $("#correct").html("You are registered successfully!").fadeIn();
                
            }
            else{
                $("#errors").html(missingfields + errormessage).fadeIn();
            }
        })
