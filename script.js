document.getElementById("questionnaire-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById("status").innerText = "Merci pour votre participation !";
                document.getElementById("status").style.color = "green";
            } else {
                document.getElementById("status").innerText = "Une erreur est survenue. Essayez à nouveau.";
                document.getElementById("status").style.color = "red";
            }
        })
        .catch(error => {
            document.getElementById("status").innerText = "Une erreur est survenue. Essayez à nouveau.";
            document.getElementById("status").style.color = "red";
        });
});
