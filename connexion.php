<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connexion à la base de données
    $conn = new mysqli("localhost", "root", "", "9athya.tn");

    if ($conn->connect_error) {
        die("Échec de la connexion : " . $conn->connect_error);
    }

    // Récupérer les données du formulaire
    $login = $_POST['lg'];
    $mot_de_passe = $_POST['mdp'];

    // Préparer la requête SQL pour récupérer les informations de l'utilisateur
    $stmt = $conn->prepare("SELECT * FROM users WHERE login = ?");
    $stmt->bind_param("s", $login);
    $stmt->execute();
    $result = $stmt->get_result();

    // Vérifier si l'utilisateur existe et si le mot de passe est correct
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($mot_de_passe, $user['mot_de_passe'])) {
            $_SESSION['user_id'] = $user['id'];
            echo "Connexion réussie!";
            // Rediriger vers la page de commande
            header("Location: commande.html");
        } else {
            echo "Mot de passe incorrect!";
        }
    } else {
        echo "Utilisateur non trouvé!";
    }

    $stmt->close();
    $conn->close();
}
?>
