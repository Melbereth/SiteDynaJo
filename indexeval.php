<?php

require ('Connexion.php');
$envoi = New Connexion();
// $auto->cherche($_POST['term']);

$enom = $_POST['nom'];
$email = $_POST['mail'];
$emessage = $_POST['message'];
$envoi->donne($enom,$email,$emessage);



 ?>
