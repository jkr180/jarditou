
//Déclaration des variables
var tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];

    var saisie = window.prompt("Veuillez choisir un prénom audrey, aurelien, flavien,jeremy,laurent,melik,nouara,salem,samuel,stephane. ")
//Choissir un prénom
   if(tab.includes(saisie)){
       tab.splice(tab.indexOf(saisie),1);
       tab.push("");
       alert(tab);
    }
    else {
        alert ("Mauvais prénom");
    }