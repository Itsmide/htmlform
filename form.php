<?php
    // getting all values from the HTML form
    if(isset($_POST['submit']))
    {
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $username = $_POST['username'];
        $state = $_POST['state'];
        $country = $_POST['country'];
        $phone = $_POST['phone'];
        $gender = $_POST['gender'];
        $email = $_POST['email'];
        $pass1 = $_POST['pass1'];
        $pass2 = $_POST['pass2'];
    }

    // database details
    getenv('MYSQL_DBHOST') ? $db_host=getenv('MYSQL_DBHOST') : $db_host="localhost";
    getenv('MYSQL_DBPORT') ? $db_port=getenv('MYSQL_DBPORT') : $db_port="3306";
    getenv('MYSQL_DBUSER') ? $db_user=getenv('MYSQL_DBUSER') : $db_user="root";
    getenv('MYSQL_DBPASS') ? $db_pass=getenv('MYSQL_DBPASS') : $db_pass="";
    getenv('MYSQL_DBNAME') ? $db_name=getenv('MYSQL_DBNAME') : $db_name="";

    // creating a connection
    if (strlen( $db_name ) === 0)
      $con = new mysqli("$db_host:$db_port", $db_user, $db_pass);
    else
      $con = new mysqli("$db_host:$db_port", $db_user, $db_pass, $db_name);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

    // using sql to create a data entry query
    $sql = "INSERT INTO contactform_entries (id, fname, lname, username, states, country, phone, gender, email, passwd) VALUES ('0', '$fname', '$lname', '$username', '$state', '$country', '$phone', '$gender', '$email', '$pass2')";
  
    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        echo "Entries added!";
    }
  
    // close connection
    mysqli_close($con);

?>

