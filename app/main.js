import ApiPokemonController from "./Controllers/ApiPokemonController.js";

class App {
  apiPokemonController = new ApiPokemonController();
  myPokemonController = new ApiPokemonController();

}
window["app"] = new App();
