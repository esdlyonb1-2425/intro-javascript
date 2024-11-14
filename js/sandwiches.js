const laRow = document.querySelector('.maRow');

function faisUneCardSandwich(sandwich){

    let maCard = `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${sandwich}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            
        </div>

`

    return maCard;


}

let sandwiches = ["poulet", "thon", "fromage", "boeuf"]

sandwiches.forEach((chaqueSandwich) => {
    laRow.innerHTML += faisUneCardSandwich(chaqueSandwich)
})

async function envoieCoucou(){

   return await setTimeout(()=>{return "coucou"},2000)

}

envoieCoucou().then(
    (donnees)=>{
    console.log(donnees)
}

)

console.log('je fais un autre truc pendant ce temps')
const btnBlague = document.querySelector(".btnBlague")

btnBlague.addEventListener("click", ()=>{

    let blague
    let url = 'https://api.chucknorris.io/jokes/random'
    fetch(url)
        .then(reponseEnJson => reponseEnJson.json())
        .then((reponseDeserialisee )=> {
            blague = reponseDeserialisee.value
            let paragrapheBlague = document.createElement("p")
            paragrapheBlague.innerHTML = blague
            document.querySelector('.divBlagues').appendChild(paragrapheBlague)

        })

})






