<?php 
session_start();

$conn=new PDO('mysql:host=127.0.0.1;dbname=solibio','root','');
?>

<?php
if(isset($_POST['connexion'])) 
{
	$requete=$conn->prepare("INSERT INTO recette(titre,texte) VALUES(?,?)");

	$requete->execute(array($_POST['titre'],$_POST['texteR']));
}?>
<!DOCTYPE html>
<html>
<head>
	<title>Mon profil</title>
</head>
<body>
	Bonjour 
	<?php echo $_SESSION['utilisateur']; ?>
	<form method="post" action="">
      <input type="texte" name="titre" placeholder="Nom de la recette" id="titre"/>
      <input type="texte" name="texteR" placeholder="Description de la recette" id="texte"/>
      <input type="submit" name="connexion" value="Poster">     
    </form>

</body>
</html>