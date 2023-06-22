<?php
$uname=$_POST['uname'];
$upass=$_POST['upass'];
if ($uname=="animesh" && $upass=="intern") {
    echo "<h1 style='color:green'>Login sucess</h1>";
}
else{
    echo "<h1 style='color:red'>Login failed</h1>";
}
?>