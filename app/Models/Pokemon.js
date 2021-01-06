import { generateId } from "../Utils/GenerateId.js"

export default class Pokemon {
  constructor({ name, img, description, weight, height, types, id }) {
    this.name = name
    this.img = img
    this.description = description
    this.weight = weight
    this.height = height
    this.types = types
    this.id = id || generateId()
  }
  get Template() {
    return `
    <div class="card">
      <img class="card-img-top" src="${this.img}" alt="">
        <div class="card-body">
          <h4 class="card-title">${this.name}</h4>
          <p class="card-text">${this.description}</p>
          <p>${this.weight} - ${this.height} - ${this.types}</p>
        </div>
                            </div>`
  }








}