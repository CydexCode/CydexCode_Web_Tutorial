<?php
$servername = "CydexCodeServer";
$username = "cydex";
$password = "cydex123";
$dbname = "CydexCodeDB";

// Create connection
$conn = new mysqli($CydexCodeServer, $cydex, $cydex123, $CydexCodeDB);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
