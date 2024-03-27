<?php

$mongoClient = new MongoDB\Client("mongodb://localhost:27017");
$collection = $mongoClient->guvi->profiles; 


session_start();
if (!isset($_SESSION['username'])) {
    
    http_response_code(401);
    exit("Unauthorized");
}
$username = $_SESSION['username'];


$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];


$collection->createIndex(['username' => 1], ['unique' => true]);


try {
    $insertResult = $collection->insertOne([
        'username' => $username,
        'age' => $age,
        'dob' => $dob,
        'contact' => $contact
    ]);

    echo "success"; 
} catch (MongoDB\Driver\Exception\BulkWriteException $e) {
    $error = $e->getWriteResult()->getWriteErrors()[0];
    if ($error->getCode() === 11000) {
        
        echo "duplicate_username";
    } else {
       
        http_response_code(500);
        echo "failure";
    }
}
?>


