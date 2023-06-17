<!-- 1 tier dbms architecture -->
<!-- first install xampp 
https://www.apachefriends.org/download.html latest version for windows 8.2.4 / PHP 8.2.4 -->
<!-- go to your xampp->htdocs file directory C:\xampp\htdocs then create a new php file like second.php-->
<!-- save this code -->
<?php
$a=$_GET['age'];
if($a>=18){
    echo "$a is major";
}
else{
    echo "$a is minor";
}
?>
<!-- open your xampp app and start the apache server it will gives you ports 80-->
<!-- open your browser in url write=>localhost:80 by default it open a "http://localhost/dashboard/"
this is in htdocs directory you can change this dashboard with your created .php file
of this php file we need to give a age params in browser url like http://localhost/second.php?age=23
else you can create a html file anywhere like i did in this index.html
after your work stop the apache server

you can run it in any device with connected same network like same wi-fi or use hot-spot by the step bellow
get your ip-address for host using this command in your cmd
ipconfig 
IPv4 Address. . . . . . . . . . . : 192.xxx.x.x copy your 192. IPaddress then
open your browser another device and run the url in your browser =>192.xxx.x.x:80 -->