<?php
$con=mysqli_connect('127.0.0.1','root','');
if(!$con){
    echo 'Not Connected To server';
}
if(!mysqli_select_db($con,'onthehimalaya')){
    echo 'database not selected';
}
$Name=$_POST['name'];
$Address=$_POST['address'];
$Email=$_POST['email'];
$Message=$_POST['message'];

$sql="INSERT INTO onthehimalayatable(Name,Address,Email,Message) VALUES ('$Name','$Address','$Email','$Message')";

if(!mysqli_query($con,$sql)){
    echo 'Not Inserted';
}
else{
    echo 'INserted';
}
header("refresh:2; url=C:\xampp\htdocs\onthehimalyaphp\durbar.html");
?>