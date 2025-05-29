<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROJECT-Form Validation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="errors"></div>

    <div class="container">
        <div class="forms">
            <label for="Email">Email: </label>
            <input type="email" name="Email" id="Email">
            <label for="PhoneNo">Phone Number: </label>
            <input type="text" name="PhoneNo" id="phoneno">
            <label for="pass">Password: </label>
            <input type="password" name="pass" id="pass">
            <label for="confirmpass">Confirm Password: </label>
            <input type="password" name="confirmpass" id="confirmpass">
        </div>
        <input type="submit" value="Submit" id="submit">
    </div>
    <div id="correct"></div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>


</body>
</html>
