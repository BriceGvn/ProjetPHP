-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 19 mai 2019 à 19:16
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `solibio`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

DROP TABLE IF EXISTS `commentaires`;
CREATE TABLE IF NOT EXISTS `commentaires` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(30) NOT NULL,
  `texte` text NOT NULL,
  `id_recette` int(11) NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`id`, `titre`, `texte`, `id_recette`, `id_utilisateur`) VALUES
(1, 'blabla', 'blablabla', 8, 7),
(2, 'blabla', 'blablabla', 8, 7),
(3, 'blabla', 'blablabla', 1, 14),
(4, 'nana', 'nanana', 1, 14),
(5, 'tata', 'tatatata', 1, 14),
(6, 'lala', 'lalalala', 6, 14),
(7, 'Avis', 'Un dÃ©lice', 7, 16),
(8, 'Avis', 'Un dÃ©lice', 7, 16);

-- --------------------------------------------------------

--
-- Structure de la table `recette`
--

DROP TABLE IF EXISTS `recette`;
CREATE TABLE IF NOT EXISTS `recette` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(30) NOT NULL,
  `texte` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `recette`
--

INSERT INTO `recette` (`id`, `titre`, `texte`) VALUES
(1, 'Soupe aux choux', 'TrÃ¨s bonne recette'),
(3, 'Tarte aux pommes', 'Gateau'),
(4, '', ''),
(5, 'steak de cheval', 'bien cuit'),
(6, 'steak de cheval', 'bien cuit'),
(7, 'burger', 'cheat meal');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `motDePasse` varchar(50) NOT NULL,
  `adresseMail` varchar(50) NOT NULL,
  `dateNaissance` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `nom`, `prenom`, `pseudo`, `motDePasse`, `adresseMail`, `dateNaissance`) VALUES
(1, '', '', '', '', '', ''),
(2, '', '', '', '', '', ''),
(3, '', '', '', '', '', ''),
(4, '', '', '', '', '', ''),
(5, '', '', '', '', '', ''),
(6, '', '', '', '', '', ''),
(7, '', '', '', '', '', ''),
(8, '', '', '', '', '', ''),
(9, '', '', '', '', '', ''),
(10, 'toto', 'toto', 'toto', 'titi', 'test1@gmail.com', 'vre1315r'),
(11, 'toto', 'toto', 'toto', 'titi', 'test1@gmail.com', 'vre1315r'),
(12, 'toto', 'toto', 'toto', 'titi', 'test1@gmail.com', 'vre1315r'),
(13, 'tata', 'tata', 'tata', 'tata28', 'tata@gmail.com', 'tata'),
(14, 'tutu', 'tutu', 'tutu', '573c926ef1e34562e8edf1e3aac6247f', 'tutu@gmail.com', '32 fÃ©vrier 1906'),
(15, '', '', '', 'd41d8cd98f00b204e9800998ecf8427e', '', ''),
(16, 'tyty', 'tyty', 'tyty', '25771c2411c084d53abb6352e2e22a11', 'tyty@gmail.com', '7 avril 140');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
