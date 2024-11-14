

const monTexte = "coucou je suis du texte"

let choucroute = "une choucroute ca se mange"

let chaineDeCaracteres = "sddf+968ùù*" //string
let unNombre = 123  //integer (nombre entier
let unNombreDecimal = 12.5 //   float =  nombre a virgule flottante
let ilFaitBeau = false
let lesFritesCEstSalé = true

let unTableau = ["pomme", "poire", "pêche"]
let unAutreTableau = [
                            "une bouteille d'huile",
                            "coucou",
                            12,
                            false
                        ]
let tableauCompliqué= [
                            "coucou",
                            [
                                "pomme",
                                "poire"
                            ],
                            421



                        ]



if(ilFaitBeau){
    console.log("je sors me promener")
}else{
    console.log("je sors pas me promener")
}

//------------------------------------

let nombreDePommes = 13
let autreNombreDePommes = 4
let encoreUnAutreNombreDePommes = "7 pommes"
let encoreUnAutreAutreNombreDePommes = "9"
let unPrenom = "luc"
let unAutrePrenom = "anais"
console.log("HEY REGARDE PAR ICI")
console.log(nombreDePommes + autreNombreDePommes)
console.log(unPrenom + unAutrePrenom)
console.log(unAutrePrenom + nombreDePommes)
console.log(encoreUnAutreNombreDePommes + nombreDePommes)
console.log(encoreUnAutreAutreNombreDePommes + nombreDePommes)

console.log("HEY PAR ICI LA SUITE")
let totalDePommes = nombreDePommes +autreNombreDePommes
console.log("Le total de pommes : "+totalDePommes)

let variableDeLuc = "luc"
let variableDeMichel = "michel"
console.log(variableDeLuc[1])

let unAutreMot = "champignon"
//à partir de cette variable-la, créer une autre variable
//contenant les 5 premieres lettres de la premiere

let soupeLegumes = ["poireau", "carotte", "navet"]

let soupe = {
    nom : "Soupe de legumes",
    ingredients: ["courgettes", "patates", "navets"],
    temperature : 25
}

console.log(soupe)

console.log(variableDeLuc.length)
console.log(variableDeMichel.length)

let isLonger = variableDeLuc.length > variableDeMichel.length
let prenomLePlusLong = "prenom le plus long"

let isBig = true



if(isLonger){
    prenomLePlusLong = "luc"
}else{
     prenomLePlusLong = "michel"
}


console.log("le plus long prenom c'est : "+ prenomLePlusLong)