let string = "je suis une chaine"

const etudiant = {
    prenom : "arthur",
    age: 18,
    genre : 0
}

function disCoucou(prenom){
    console.log("coucou "+ prenom)
}

disCoucou("enzo")

let prenomProgramme = "Ada"

const messageFin = document.querySelector(".messageFin")

const boutonEnvoyer = document.querySelector(".boutonEnvoyer")

const champTexte = document.querySelector(".champTexte")


boutonEnvoyer.addEventListener("click", ()=>{
    if(champTexte.value.length > prenomProgramme.length )
    {
        messageFin.innerHTML = "ton prenom est plus long que le mien"

    }else if(champTexte.value.length == prenomProgramme.length ){
        messageFin.innerHTML = "nos prenoms ont la meme longueur"

    }


    else{
        messageFin.innerHTML = "mon prénom est le plus long"
    }
})

const btnNbHasard = document.querySelector(".boutonNombre")
const paragrapheNbHasard = document.querySelector(".nbHasard")


btnNbHasard.addEventListener("click", ()=>{

   let nbHasard = Math.random()*10

    let nbArrondi = Math.round(nbHasard)

    paragrapheNbHasard.innerHTML = nbArrondi;
})

let exempleCouleur = "#556b2f";

const leH1 = document.querySelector(".leH1");
leH1.style.color = exempleCouleur;
