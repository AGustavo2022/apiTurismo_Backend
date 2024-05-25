import {newId} from "../utils/utils.js"


export class Gastronomy {
    #id
    #name
    #address
    #photo_url

  constructor({
    id = newId(),
    name,
    address,
    photo_url

  }) {
    this.#id = id
    this.#name = name
    this.#address = address
    this.#photo_url = photo_url
  }

  dto() {
    return {
      id: this.#id,
      name: this.#name,
      address: this.#address,
      photo_url: this.#photo_url
    }
  }
}
