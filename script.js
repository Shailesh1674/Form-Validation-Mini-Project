function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function isValidPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;
    return regex.test(password);
}
$("#phoneno").on("input", function() {
    this.value = this.value.replace(/\D/g, '');
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});
$(".toggle-password").click(function() {
    var targetInput = $($(this).attr("data-target"));
    var type = targetInput.attr("type") === "password" ? "text" : "password";
    targetInput.attr("type", type);
    $(this).text(type === "password" ? "Show" : "Hide");
});
$("#submit").click(function(){
    var errormessage = "";
    var missingfields = "";
    $("#errors").hide().html("");
    $("#correct").hide().html("");
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
    if($("#Email").val() && isEmail($("#Email").val()) == false){
        errormessage += "<p>Please enter a valid email address.</p>";
    }
    if($("#phoneno").val() && $("#phoneno").val().length != 10){
        errormessage += "<p>Phone number must be exactly 10 digits.</p>";
    }
    if($("#pass").val() && isValidPassword($("#pass").val()) == false){
        errormessage += "<p>Password must be 8-15 characters with at least one uppercase, one lowercase, and one special character.</p>";
    }
    if($("#pass").val() && $("#confirmpass").val() && $("#pass").val() != $("#confirmpass").val()){
        errormessage += "<p>Password and Confirm Password should be the same.</p>";
    }
    if(errormessage == "" && missingfields == ""){
        $("#correct").html("You are registered successfully!").fadeIn();
    } else {
        $("#errors").html(missingfields + errormessage).fadeIn();
    }
});
