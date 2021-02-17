//Déclaration des variables:
var PU = window.prompt("Entrer le prix unitaire")
var QTECOM = window.prompt("Entrer la quantités de produit")
var TOT = PU*QTECOM;
var TOT;
var TOT2;
var TOT3;

TOT=(PU*QTECOM);// calcule de la somme:
if(TOT<=200 && TOT >=100)
    { 
        TOT2 = TOT*0.95;
    }

    else if(TOT>200)
    {
        TOT2 =TOT*0.9;
    }
    else
    {
         TOT2 = TOT;
    };
    //Frais de port:

if (TOT2>500)
    {
     TOT3 = TOT2;
    }
    else
    {
        TOT3 = TOT2*1.02;
        if (TOT3 < TOT2 + 6)
    {
        TOT3 = TOT2 + 6;
    };
    };
    alert("Le prix a payer sera de " + TOT3 + "€." ); //Resultat