<?php
$name=$_GET["name"];
$age=$_GET["age"];
$gender=$_GET["total"];
$total=$_GET["total"];

$conn=new mysqli("localhost","root","","acme");
if($conn->connect_error){
    die("Connection failed: ".$conn->connect_error);
}
echo "Connected successfully!";

$status=mysqli_query($conn,"INSERT INTO acme.student(name, age, gender,total) VALUES ('$name', $age, '$gender', $total);");
if($status){
    echo "Data inserted successfully!";
}
else{
    echo mysqli_error($conn);
}

?>