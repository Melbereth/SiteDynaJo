<?php
class Connexion {


  private $bdd;

  public function Connexion(){

    try {
      $this->bdd = new PDO('mysql:host=localhost;dbname=eval23;charset=utf8', 'admin', 'admin', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
      echo "string";

    } catch (PDOException $e) {

        echo 'Connexion échouée : ' . $e->getMessage();

    }

  }

  public function donne($rnom,$rmail,$rmessage){

    $chsql = "INSERT INTO form (nom, mail, message) VALUES (:n,:e,:m)";
    $req = $this->bdd->prepare($chsql);
    $req->bindParam(":n",$rnom);
    $req->bindParam(":e",$rmail);
    $req->bindParam(":m",$rmessage);
    $req->execute();


  }


}


?>
