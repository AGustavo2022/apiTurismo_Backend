import { randomUUID } from 'node:crypto'

export function newId(){
    return randomUUID()
}

export function roleS (role){
    if (role === undefined){
      const role = 'user' 
      return role
     }
  }