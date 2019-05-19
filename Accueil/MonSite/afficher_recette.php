<?php
session_start();
$conn=new PDO('mysql:host=127.0.0.1;dbname=solibio','root','');?>
<?php
$requete=$conn->prepare('SELECT * FROM recette WHERE id = ?');

$machin=2;
$requete->execute(array($_GET['id']));

$requeteSS=$conn->prepare('SELECT * FROM commentaires WHERE id_recette = ?');
$requeteSS->execute(array($_GET['id']));
if (isset($_POST['titre'])) {
	$requeteS=$conn->prepare("INSERT INTO commentaires(titre,texte,id_recette,id_utilisateur) VALUES(?,?,?,?)");


	$requeteS->execute(array($_POST['titre'],$_POST['texte'],$_GET['id'],$_SESSION['id']));
	echo "test";
}

?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<?php 
	while($chouette=$requete->fetch())
{
	echo $chouette['titre'];
	?>
	<br>
	<?php
echo $chouette['texte'];
} ?>
<form method="POST" action=""> 
	<input type="texte" name="titre" placeholder="titre" id="titre">
	<input type="texte" name="texte" placeholder="commentaire" id="texte">
	<input type="submit" value="POSTER">
</form>
<?php 
while ($ligne = $requeteSS->fetch())
{
	echo $ligne['titre'];
	?> <br> <?php

	echo $ligne['texte'];}
	
?>
</body>
</html>
