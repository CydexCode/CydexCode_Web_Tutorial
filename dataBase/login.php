<?php
include('loginConnection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User is authenticated, you can set session variables or redirect
        echo "Login successful";
    } else {
        echo "Login failed. Invalid email or password.";
    }
}

$conn->close();
?>