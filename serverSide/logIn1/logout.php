<?php
session_start();
unset($_SESSION["login_status"]);
echo "logout successfully!";
?>