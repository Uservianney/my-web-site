const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static('public'));

// Route pour traiter le formulaire
app.post('/submit', (req, res) => {
    const formData = req.body;

    // Affichage des données dans la console
    console.log('Email:', formData.email);
    console.log('Nom:', formData.name);
    console.log('Âge:', formData.age);
    console.log('Mot de passe:', formData.password);  // Ne jamais stocker de mot de passe en clair dans un vrai projet
    console.log('Réponse à la question 1:', formData.q1);
    console.log('Réponse à la question 2:', formData.q2);
    console.log('Réponse à la question 3:', formData.q3);
    console.log('Réponse à la question 4:', formData.q4);
    console.log('Réponse à la question 5:', formData.q5);
    console.log('Réponse à la question 6:', formData.q6);
    console.log('Réponse à la question 7:', formData.q7);
    console.log('Réponse à la question 8:', formData.q8);
    console.log('Réponse à la question 9:', formData.q9);
    console.log('Réponse à la question 10:', formData.q10);

    // Réponse de succès
    res.json({ success: true });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur à http://localhost:${port}`);
});
