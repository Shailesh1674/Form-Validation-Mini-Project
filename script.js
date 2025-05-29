// Function to check if the email is valid
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#submit").click(function(){

    // Reset messages and hide containers before validation
    var errormessage = "";
    var missingfields = "";
    $("#errors").hide().html("");  // Clear and hide errors
    $("#correct").hide().html(""); // Clear and hide success message

    if($("#Email").val() == ""){
        missingfields += "<p>Email is required.</p>";
    }
    if($("#phoneno").val() == ""){
        missingfields += "<p>Phone number is required.</p>";
    }
    if($("#pass").val() == ""){
        missingfields += "<p>Password is required.</p>";
    }
    if($("#confirmpass").val() == ""){
        missingfields += "<p>Confirm Password is required.</p>";
    }

    // Check if email is valid only if it's entered
    if($("#Email").val() && isEmail($("#Email").val()) == false){
        errormessage += "<p>Please enter a valid email address.</p>";
    }

    // Check phone number: should be numeric and 10 digits
    if($("#phoneno").val()){
        if($.isNumeric($("#phoneno").val()) == false) {
            errormessage += "<p>Phone number should be numeric.</p>";
        } else if($("#phoneno").val().length != 10) {
            errormessage += "<p>Phone number must be exactly 10 digits.</p>";
        }
    }

    // Check if passwords match
    if($("#pass").val() && $("#confirmpass").val()){
        if($("#pass").val() != $("#confirmpass").val()){
            errormessage += "<p>Password and Confirm Password should be the same.</p>";
        }
    }

    // Display messages accordingly
    if(errormessage == "" && missingfields == ""){
        $("#correct").html("You are registered successfully!").fadeIn();
    } else {
        $("#errors").html(missingfields + errormessage).fadeIn();
    }

});
