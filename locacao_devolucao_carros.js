class Pessoa {
	nome;
	idade;
	data_nascimento;
	endereco;
	telefone_celular;
	email;
	constructor(nome, idade, data_nascimento, endereco, telefone_celular, email) {
		this.nome = nome;
	}
}
const pessoa1 = new Pessoa("chupetina");

console.log(pessoa1);
