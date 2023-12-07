class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const ataque = this.ataque();
    if (ataque) {
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    } else {
      console.log(`Tipo de herói desconhecido: ${this.tipo}`);
    }
  }

  ataque() {
    switch (this.tipo) {
      case "Mago":
        return "magia";
      case "Guerreiro":
        return "espada";
      case "Monge":
        return "artes marciais";
      case "Ninja":
        return "shuriken"; 
    }
  }
}

const heroi = new Heroi("Capitão América", 30, "Guerreiro");
const heroi1 = new Heroi("Nikita", 15, "Ninja");
const heroi2 = new Heroi("Butão", 50, "Monge");
const heroi3 = new Heroi("Akai", 30, "Mago");
const heroi4 = new Heroi("SapoPuia", 5, "Lagoa");

heroi4.atacar(); 
heroi.atacar(); 
heroi1.atacar(); 
heroi2.atacar(); 
heroi3.atacar(); 
