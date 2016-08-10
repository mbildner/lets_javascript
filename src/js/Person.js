import _ from 'lodash'

export class Person {
  constructor(name){
    this.name = name
  }

  mapName(letterTransformer){
    return _.first(_.map(this.name.split(), letterTransformer))
  }
}
