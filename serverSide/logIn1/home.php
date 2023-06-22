<?php
session_start();
print_r(isset($_SESSION["login_status"]));
if (!isset($_SESSION["login_status"])) { // if you try to redirect the home.php without login
    echo "unauthorized attempt";
    die;
} else if ($_SESSION["login_status"] == false) { // if you give the wrong uname and password and redirect the home.php
    echo "illegal attempt for login";
    die;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>private</title>
</head>

<body>
    <h1>This is personal website!!</h1>
    <form action="logout.php">
        <button>Logout</button>
    </form>

</body>

</html>