<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    die("Vous devez être connecté pour passer une commande.");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connexion à la base de données
    $conn = new mysqli("localhost", "root", "", "9athya.tn");

    if ($conn->connect_error) {
        die("Échec de la connexion : " . $conn->connect_error);
    }

    // Récupérer les données du formulaire
    $user_id = $_SESSION['user_id'];
    $article = $_POST['chxart']; // Nom de l'article sélectionné
    $quantite = $_POST['qte'];
    $prix = $_POST['qt']; // Prix calculé (quantité * prix unitaire + frais de livraison)
    $mode_livraison = $_POST['lv'];
    $date_livraison = $_POST['dt'];
    $heure_livraison = $_POST['tm'];

    // Préparer la requête SQL pour insérer la commande
    $stmt = $conn->prepare("INSERT INTO orders (user_id, article, quantite, prix, mode_livraison, date_livraison, heure_livraison) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("isidsss", $user_id, $article, $quantite, $prix, $mode_livraison, $date_livraison, $heure_livraison);

    // Exécuter la requête
    if ($stmt->execute()) {
        echo "Commande passée avec succès!";
    } else {
        echo "Erreur: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
