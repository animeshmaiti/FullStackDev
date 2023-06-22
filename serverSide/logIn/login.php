<?php
session_start();
$_SESSION["login_status"]=false;

if (!isset($_POST['uname']) || empty($_POST['uname'])) {
    echo "param uname is missing";
    die;
} else if (!isset($_POST['upass']) || empty($_POST['upass'])) {
    echo "param upass is missing";
    die;
}
// $person=["name"=>["animesh"],"password"=>["intern"]];
$uname = $_POST['uname'];
$upass = $_POST['upass'];
if ($uname == "animesh" && $upass == "intern") {
    echo "<h1 style='color:green'>Login sucess</h1>";
    header("location:home.php");
    $_SESSION["login_status"]=true;
} else {
    echo "<h1 style='color:red'>Login failed</h1>";
}
?>
