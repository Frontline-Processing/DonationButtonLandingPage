<?php
$sql = "INSERT INTO `DonationCounter` (amount) VALUES ('$amount')";
$sql = mysqli_prepare($conn, "INSERT INTO `DonationCounter` (amount) VALUES ('$amount')");
if($sql !== FALSE){
    mysqli_stmt_bind_param($sql, "ss", $amount);
    if(mysqli_stmt_execute($sql)){
        echo "New record created successfully";
    } else {
        echo mysqli_stmt_error($sql);
    }
} else{
    echo mysqli_error($conn);
}
?>
