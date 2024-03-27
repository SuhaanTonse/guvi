<?php
   // connect to mongodb
   $m = new \MongoDB\Client("mongodb://localhost:27017");
	
   echo "Connection to database successfully";
   // select a database
   $db = $m->mydb;
	
   echo "Database mydb selected";
?>