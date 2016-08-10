export class Person {
  constructor(name){
    this.name = name
  }

  mapName(letterTransformer){
    return this.name.split().map(letterTransformer).join('')
  }
}
