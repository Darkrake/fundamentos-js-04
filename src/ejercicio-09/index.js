// Escribe tu código aquí:
class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
  
    introduce() {
      console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`)
    }
  }
  
  const person = new Person('Raquel', 32)
  person.introduce()