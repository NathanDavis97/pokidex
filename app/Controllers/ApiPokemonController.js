import { ProxyState } from "../AppState.js"
import { apiPokemonService } from "../Services/ApiPokemonService.js"


function _drawPokemon() {
  let template = ''
  ProxyState.apiPokemon.forEach(p => {
    template += `<li class="action" onclick="app.apiPokemonController.getPokemon('${p.index}')">${p.name}</li>`
  })
  document.getElementById("api-pokemon").innerHTML = template
}

function _drawActivePokemonn() {
  let template = ''
  if (ProxyState.activePokemon) {
    template = ProxyState.activePokemon.Template
  }
  document.getElementById("active-pokemon").innerHTML = template
}

export default class ApiPokemonController {
  constructor() {
    ProxyState.on('apiPokemon', _drawPokemon)
    ProxyState.on('activePokemon', _drawActivePokemonn)

    this.getAllPokemon()
  }

  getAllPokemon() {
    try {
      apiPokemonService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  getPokemon() {
    try {
      apiPokemonService.getPokemon()
    } catch (error) {
      console.error(error)
    }
  }
}