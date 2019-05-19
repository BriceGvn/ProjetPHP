<?php
$conn=new PDO('mysql:host=127.0.0.1;dbname=solibio','root','');
$Nom=$_POST['name'];
$Prenom=$_POST['firstname'];
$Pseudo=$_POST['pseudo'];
$MotDePasse=$_POST['password'];
$AdresseMail=$_POST['email'];
$DateDeNaissance=$_POST['birthday'];

$Nom=htmlspecialchars($Nom);
$Prenom=htmlspecialchars($Prenom);
$Pseudo=htmlspecialchars($Pseudo);
$MotDePasse=htmlspecialchars($MotDePasse);
$MotDePasse=md5($MotDePasse);
$AdresseMail=htmlspecialchars($AdresseMail);
$DateDeNaissance=htmlspecialchars($DateDeNaissance);

$req="INSERT INTO utilisateur (nom,prenom,pseudo,motDePasse,adresseMail,dateNaissance) values ('$Nom','$Prenom','$Pseudo','$MotDePasse','$AdresseMail','$DateDeNaissance')";

$requete=$conn->prepare("INSERT INTO utilisateur(nom,prenom,pseudo,motDePasse,adresseMail,dateNaissance) VALUES(?,?,?,?,?,?)");

$requete->execute(array($Nom,$Prenom,$Pseudo,$MotDePasse,$AdresseMail,$DateDeNaissance));




