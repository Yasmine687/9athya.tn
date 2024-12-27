<?php
// Paramètres de la connexion à la base de données
$servername = "localhost"; // ou l'adresse de votre serveur
$username = "root"; // votre nom d'utilisateur MySQL
$password = ""; // votre mot de passe MySQL
$dbname = "9athya"; // votre nom de base de données

// Créer une connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

// Récupérer les données du formulaire
$nom_prenom = $_POST['np'];
$telephone = $_POST['tl'];
$adresse = $_POST['ad'];
$mode_paiement = $_POST['mod'];
$mot_de_passe = $_POST['pd'];
$preferences = "";

// Vérifier les préférences sélectionnées
if (isset($_POST['pr1'])) $preferences .= "MEN, ";
if (isset($_POST['pr2'])) $preferences .= "HTC, ";
if (isset($_POST['pr3'])) $preferences .= "BEA, ";
if (isset($_POST['pr4'])) $preferences .= "BRC, ";

// Enlever la dernière virgule de la chaîne
$preferences = rtrim($preferences, ', ');

// Récupérer le login
$login = $_POST['lg'];

// Préparer la requête SQL pour insérer les données
$query = "INSERT INTO utilisateurs (nom_prenom, telephone, adresse, mode_paiement, mot_de_passe, preferences, login)
          VALUES ('$nom_prenom', '$telephone', '$adresse', '$mode_paiement', '$mot_de_passe', '$preferences', '$login')";

// Exécuter la requête SQL
if ($conn->query($query) === TRUE) {
    echo "Inscription réussie !";
} else {
    echo "Erreur : " . $query . "<br>" . $conn->error;
}

// Fermer la connexion à la base de données
$conn->close();
?>
