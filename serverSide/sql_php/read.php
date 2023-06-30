<?php
 $conn=new mysqli("localhost","root","","acme");
    if($conn->connect_error){
        // -> is used to access the properties and methods of an object
        die("Connection failed: ".$conn->connect_error);
    }
    $result=mysqli_query($conn,"SELECT * FROM acme.student;");
    // print_r($result);
    $total_rows=mysqli_num_rows($result);
    // dot means concatenation in php
    echo "Total rows: ".$total_rows."<br>";
    for($i=0;$i<=$total_rows;$i++){
        $row=mysqli_fetch_assoc($result);
        print_r($row);
        echo "<br>";
    }
?>