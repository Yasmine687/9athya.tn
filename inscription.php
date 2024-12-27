<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connexion à la base de données
    $conn = new mysqli("localhost", "root", "", "9athya.tn");

    // Vérifier la connexion
    if ($conn->connect_error) {
        die("Échec de la connexion : " . $conn->connect_error);
    }

    // Récupérer les données du formulaire
    $nom_prenom = $_POST['np'];
    $telephone = $_POST['tl'];
    $adresse = $_POST['ad'];
    $mode_paiement = $_POST['mod']; // ESP, CAB, ELC
    $mot_de_passe = password_hash($_POST['pd'], PASSWORD_DEFAULT); // Hachage du mot de passe
    $login = $_POST['lg'];
    $preferences = implode(", ", array_filter([$_POST['pr1'], $_POST['pr2'], $_POST['pr3'], $_POST['pr4']]));

    // Préparer la requête SQL
    $stmt = $conn->prepare("INSERT INTO users (nom_prenom, telephone, adresse, mode_paiement, mot_de_passe, login, preferences) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $nom_prenom, $telephone, $adresse, $mode_paiement, $mot_de_passe, $login, $preferences);

    // Exécuter la requête et vérifier si l'insertion a réussi
    if ($stmt->execute()) {
        echo "Inscription réussie!";
    } else {
        echo "Erreur: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
