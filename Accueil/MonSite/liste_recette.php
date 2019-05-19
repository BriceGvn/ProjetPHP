<?php
session_start();
$conn=new PDO('mysql:host=127.0.0.1;dbname=solibio','root','');?>
<?php
$requete=$conn->query('SELECT * FROM recette ORDER BY titre');

while($osef = $requete->fetch()) {
	echo "<a href='afficher_recette.php?id=".$osef['id']."' title='afficher la recette'>".$osef['titre']." </a>" ?>
	
	<br>
	<?php
	# code...
}
?>