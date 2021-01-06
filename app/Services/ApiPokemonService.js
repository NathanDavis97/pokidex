import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokiApi } from "./AxiosService.js";


class ApiPokemonService {
  async getAllPokemon() {
    let res = await pokiApi.get('')
    ProxyState.apiPokemon = res.data.results
  }
  async getPokemon(name) {
    let res = await pokiApi.get(name)
    // NOTE when the api returns a single item simply cast it
    ProxyState.activePokemon = new Pokemon(res.data)
  }
}

export const apiPokemonService = new ApiPokemonService();