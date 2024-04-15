// https://rickandmortyapi.com/api/character/?name=morty
const form = document.getElementById("form")
const searchInput = document.getElementById("search")
const charactersDiv = document.querySelector(".characters")

const printCharacters=(characters)=>{
    charactersDiv.innerHTML = ""
characters.forEach(character=>{
    charactersDiv.innerHTML += `
    <div class="card border-primary mb-3" style="max-width: 20rem;">
  <div class="card-header">Personaje encontrado:</div>
  <div class="card-body">
    <h4 class="card-title">${character.name}</h4>
    </div>
    <img src="${character.image}" alt="image">
</div>
    `
})
}

const searchCharacter =async(e)=>{
    e.preventDefault()
    try {
        const search =searchInput.value
        const res = await axios.get("https://rickandmortyapi.com/api/character/?name="+search)
        const characters =res.data.results
        printCharacters(characters)
    } catch (error) {
        console.error(error);
    }
}

form.addEventListener("submit",searchCharacter)
