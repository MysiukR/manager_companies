Welcome!<br>
Company name: <?php echo $_POST["company_name"]; ?><br>
Estinated earnings: <?php echo $_POST["est_earn"]; ?><br>


<?php
$servername="localhost";
$username="romanm";
$password="password";

$conn=new mysqli($servername,$username,$password);

if($conn->connect_error){
die("Conncection failed: " . $conn->connect_error);
}
echo "Connected successfully <br>";

$sql = "CREATE DATABASE IF NOT EXISTS Web_db";
if ($conn->query($sql)===TRUE) {
echo "Database created successfully <br>";
} else {
echo "Error created successffully" . $conn->error;
}

$sql="USE Web_db;";
if ($conn->query($sql)===TRUE) {
echo "Database using successfully <br>";
} else {
echo "Error using successffully" . $conn->error;
}


$sql = "CREATE TABLE IF NOT EXISTS new_company (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,company_name VARCHAR(30) NOT NULL,est_earn VARCHAR(30) NOT NULL;";
if($conn->query($sql)===TRUE){
echo "Table new_company creates successuffully <br>";
}else{
echo "Error creating table: " . $conn->error;
}
$company_name=$_POST["company_name"];
$est_earn=$_POST["est_earn"];


$sql = "SELECT email FROM new_company WHERE company_name='$company_name'";
$result = $conn->query($sql);

if(!$row = $result->fetch_assoc())
{
$sql="INSERT INTO new_company (company_name,est_earn) VALUES ('$company_name','$est_earn')";
if($conn->query($sql)===TRUE){
echo "New record adding successuffully <br>";
}else{
echo "Error adding: " . $conn->error;
}
	}
	else
	{
		echo "YOU ARE ALREADY REGISTERED COMPANY!";
}
echo "<br>________________________________________________________________<br>";


$conn->close();
?>
