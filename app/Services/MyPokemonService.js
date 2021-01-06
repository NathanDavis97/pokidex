import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonService {
  async getAllPokemon() {
    let res = await sandboxApi.get('')
    ProxyState.myPokemon = res.data.map(s => new Pokemon(s))
  }
  getPokemon(name) {
    let pokemon = ProxyState.myPokemon.find(p => p.name === name)
    ProxyState.activePokemon = pokemon
  }

  async addPokemon() {
    let res = await sandboxApi.post('', ProxyState.activePokemon)

    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]

    // this.getAllPokemon()
  }

  async removePokemon() {
    let res = await sandboxApi.delete(ProxyState.activePokemon.id)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(s => s.id !== ProxyState.activePokemon.id)
    ProxyState.activePokemon = null

    // this.getAllPokemons()
  }
}

export const myPokemonService = new MyPokemonService();