<?php
session_start();
$conn=new PDO('mysql:host=127.0.0.1;dbname=solibio','root','');?>
<?php
if(isset($_POST['connexion']))
{
  $AdresseMail = htmlspecialchars($_POST['email']);
  $MotDePasse = ($_POST['password']);
  $MotDePasse = md5($MotDePasse);
  if(!empty($AdresseMail) AND !empty($MotDePasse))
  {
  $requser = $conn->prepare("SELECT * From utilisateur where adresseMail = ? and motDePasse = ?" );
  $requser ->execute(array($AdresseMail, $MotDePasse));
  $userexist = $requser->rowCount();
    if($userexist == 1)
    {
    $userinfo = $requser ->fetch();
    $_SESSION['id'] = $userinfo['id'];
    $_SESSION['utilisateur'] = $userinfo['nom'];
    $_SESSION['mail'] = $userinfo['adresseMail'];
    header("Location: profil.php?id=".$_SESSION['id']);
    }
    else
    {
        ?> 
        <script type="text/javascript">alert("Identifiants incorrects");</script>
        <?php
        
    }
  }
    else
    {
    
    ?>
     <script type="text/javascript">alert("Veuillez remplir tous les champs");</script>
    <?php
    
  }
} ?>
<div class="login-page">
  <div class="SoliBio">
    <div>Soli<span>Bio</span></div>
  </div>
<div class="login-page">
  <div class="form">
    <form class="register-form" id="" method="post" action="">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form" method="post" action="">
      <input type="email" name="email" placeholder="Adresse Mail" id="email"/>
      <input type="password" name="password" placeholder="Mot de Passe" id="password"/>
      <input type="submit" name="connexion" value="Connexion">
      <p class="message">Non enregistré ? <a href="index.php">Créer un compte</a></p>
    </form>
    <style type="text/css">
        @import url(site.css);
    </style>
  </div>
  </div>