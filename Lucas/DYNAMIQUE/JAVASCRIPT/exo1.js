//Déclaration des variables
var age = 1;
var jeune = 0;
var moyen = 0;
var vieux = 0

do

{age = prompt("Quelle est l'age de la personne ?"+ age + "\nou annuler ") //SAIsir les informations
if (age !=null && age !="") 

{
    age++;
}    


    if (age <20 && age > 0)
    
    {
        jeune++;
    }
    else if (age >40 && age <=100)

            vieux++;
        
        else if (age >= 20 && age<= 40) 
{
            moyen++;
}     
else (age > 100)
{
    result = "ERREUR";
}
}
while (age!= null && age !="");
console.log ("il y a" + jeune + " jeune. "  +  "\nil y a " + vieux + " vieux." + "\nil y a" + moyens + " moyens.") //Résulat