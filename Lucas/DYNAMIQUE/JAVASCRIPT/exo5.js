//Effectuez le contrôle de saisie de votre formulaire Jarditou en Javascript.

//Lorsqu'une erreur est détectée, l'utilisateur doit en être informé grâce à l'affichage d'un message sous le champ concerné.

//Le formulaire ne peut être envoyé que lorsque tout est bon.
//

var check = document.getElementById('envoie');
check.addEventListener("click", function verif(event)
{
    var Coordonnées = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
    var mail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;
    var birth = /(^[0-9]{4}[\-]{1}[0-9]{2}[\-]{1}[[0-9]{2}$)/;
    var cp = /(^[0-9]{5}$)/;
    var adr = /(^[0-9]+[a-zA-Z-\s]+$)|^$/;
    var Localisation = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)|^$/;
    
    var nom = document.getElementById ("Nom").value;
    var prenom = document.getElementById("Prénom").value;
    var Sexe1 = document.getElementById("inlineRadio1").checked;
    var sexe2 = document.getElementById("inlineRadio2").checked;
    var sexe3 = document.getElementById("inlineRadio3").checked;
    var date = document.getElementById("date").value;
    var codepostal = document.getElementById("Code Postal").value;
    var adresse = document.getElementById("Adresse").value;
    var ville = document.getElementById("Ville").value;
    var email = document.getElementById("mail").value;
    var sujet = document.getElementById("sujet").value;
    var accept = document.getElementById("accept").checked;
    var question = document.getElementById("question").value;

    if (!Coordonnées.test(nom))
    {
        document.getElementById("erreurName").textContent = "Utilisez uniquement des caractères alphabétiques";
        document.getElementById("erreurName").style.color = 'red';
        event.preventDefault();  
    }
    else
    {
        document.getElementById("erreurName").textContent = "Valide !";
        document.getElementById("erreurName").style.color = 'green';
    }
    
    if (!Coordonnées.test(prenom))
    {
        document.getElementById("erreurPrenom").textContent = "Utilisez uniquement des caractères alphabétiques";
        document.getElementById("erreurPrenom").style.color = 'red';
        event.preventDefault();
    }
    else
    {
        document.getElementById("erreurPrenom").textContent = "Valide !";
        document.getElementById("erreurPrenom").style.color = 'green';
    }

    if (Sexe1 == false && sexe2 == false && sexe3 == false)
    {
        document.getElementById("erreurSexe").textContent = "Veuillez choisir une réponse";
        document.getElementById("erreurSexe").style.color = 'red';
        event.preventDefault();
    }
    else
    {
        document.getElementById("erreurSexe").textContent = "Valide !";
        document.getElementById("erreurSexe").style.color = 'green';
    }

    if (!birth.test(date))
    {
        document.getElementById("erreurDate").textContent = "Date de naissance non conforme";
        document.getElementById("erreurDate").style.color = 'red';
        event.preventDefault();
    }
    else
    {
        document.getElementById("erreurDate").textContent = "Valide !";
        document.getElementById("erreurDate").style.color = 'green';
    }

    if (!cp.test(codepostal))
    {
        document.getElementById("erreurCP").textContent = "Code Postal non conforme";
        document.getElementById("erreurCP").style.color = 'red';
        event.preventDefault();
    }
    else
    {
        document.getElementById("erreurCP").textContent = "Valide !";
        document.getElementById("erreurCP").style.color = 'green';
    }

    if (!adr.test(adresse)) {
        document.getElementById("erreurAdr").textContent = "Adresse non conforme";
        document.getElementById("erreurAdr").style.color = 'red';
        event.preventDefault();
    }
    else {
        document.getElementById("erreurAdr").textContent = "Valide !";
        document.getElementById("erreurAdr").style.color = 'green';
    }
    if (!Localisation.test(ville)) {
        document.getElementById("erreurVille").textContent = "Ville non conforme";
        document.getElementById("erreurVille").style.color = 'red';
        event.preventDefault();
    }
    else {
        document.getElementById("erreurVille").textContent = "Valide !";
        document.getElementById("erreurVille").style.color = 'green';
    }
    if (!mail.test(email)) {
        document.getElementById("erreurMail").textContent = "Adresse mail non conforme";
        document.getElementById("erreurMail").style.color = 'red';
        event.preventDefault();
    }
    else {
        document.getElementById("erreurMail").textContent = "Valide !";
        document.getElementById("erreurMail").style.color = 'green';
    }
    if (sujet == 1)
    {
        document.getElementById("erreurSujet").textContent = "Selectionnez le sujet de votre demande";
        document.getElementById("erreurSujet").style.color = 'red';
        event.preventDefault();
    }
    else {
        document.getElementById("erreurSujet").textContent = "Valide !";
        document.getElementById("erreurSujet").style.color = 'green';
    }
    if (accept != true) {
        document.getElementById("erreurAccept").textContent = "Veuillez cocher cette case";
        document.getElementById("erreurAccept").style.color = 'red';
        event.preventDefault();
    }
    else {
        document.getElementById("erreurAccept").textContent = "Valide !";
        document.getElementById("erreurAccept").style.color = 'green';
    }
    if (question == "") {
        document.getElementById("erreurQuest").textContent = "Ce champ est obligatoire";
        document.getElementById("erreurQuest").style.color = 'red';
        event.preventDefault();
    }
    else {
        document.getElementById("erreurQuest").textContent = "Valide";
        document.getElementById("erreurQuest").style.color = 'green';
    }
});











	



