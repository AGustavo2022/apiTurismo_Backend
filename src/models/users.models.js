import {newId, roleS} from "../utils/utils.js"


export class User {
  #id
  #user
  #password
  #role

  constructor({
    id = newId(),
    user,
    password,
    role = roleS()

  }) {
    this.#id = id
    this.#user = user
    this.#password = password
    this.#role = role
  }

  dto() {
    return {
      id: this.#id,
      user: this.#user,
      role: this.#role
    }
  }
}

export class UserPublico {

  #id
  #user
  #password
  #role

  constructor({
    id,
    user,
    password,
    role

  }) {
    this.#id = id
    this.#user = user
    this.#password = password
    this.#role = role
  }

  dtoP() {
    return {
      id: this.#id,
    }
  }
}