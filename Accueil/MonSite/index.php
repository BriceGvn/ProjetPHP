<!DOCTYPE html>
<html>
<head>
  <div class="SoliBio">
    <div>Amical<span>LycéeFulbert</span></div>
  </div>        
        <title>Solibio</title>
        <style>
        	body{
        		position: relative;
				 z-index: 1;
				 background: #FFFFFF;
				 max-width: 360px;
				 margin: 0 auto 100px;
				 padding: 45px;
				 text-align: center;
				 box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
        	}
        		
        	
        	}
        	.btn{
        		widht: 100%;
        	}
        </style>
</head>
<body>
		
		

<form method="POST" action="database.php">
	<table align="center">
		<tr>
			<style>
				body{
					color: white;
					text-align:left;
					background: #76b852;
				    background: -webkit-linear-gradient(right, #76b852, #8DC26F);
				    background: -moz-linear-gradient(right, #76b852, #8DC26F);
				    background: -o-linear-gradient(right, #76b852, #8DC26F);
				    background: linear-gradient(to left, #76b852, #8DC26F);
				    font-family: "Roboto", sans-serif;
				    -webkit-font-smoothing: antialiased;
				    -moz-osx-font-smoothing: grayscale;  
				   


			}
			</style>

			<td align="right">Nom</td>							
			<td><input type="text" name="name" placeholder="votre nom..."></td>
		</tr>
		<tr>
			<td align="right">Prenom</td>
			<td><input type="text" name="firstname" placeholder="votre prenom..."></td>
		</tr>
		<tr>
			<td align="right">Pseudo</td>
			<td><input type="text" name="pseudo" placeholder="votre pseudo..."></td>
		</tr>
		<tr>
			<td align="right">Mot De Passe</td>
			<td><input type="text" name="password" placeholder="votre mot de passe..."></td>
		</tr>
		<tr>
			<td align="right">Adresse Mail</td>
			<td><input type="text" name="email" placeholder="votre adresse mail..."></td>
		</tr>
		<tr>
			<td align="right">Date De Naissance</td>
			<td><input type="text" name="birthday" placeholder="votre date de naissance..."></td>
		</tr>
		<tr>
			<td></td>
			<td><input class="btn" type="submit" name="forminscription" value="Envoyer"></td>
		</tr>
	</table>
</form>
<style type="text/css">
        @import url(style.css);
</style>
 
</body>
</html>
