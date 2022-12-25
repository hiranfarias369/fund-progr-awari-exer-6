class Carro {
	constructor(
		veiculo,
		ano_de_fabricacao,
		marca,
		modelo,
		numero_de_portas,
		cor,
		quilometragem,
		valor_da_diaria
	) {
		this.veiculo = veiculo;
		this.ano_de_fabricacao = ano_de_fabricacao;
		this.marca = marca;
		this.modelo = modelo;
		this.numero_de_portas = numero_de_portas;
		this.cor = cor;
		this.quilometragem = quilometragem;
		this.valor_da_diaria = valor_da_diaria;
	}
}
// const carro_utilitario = new Carro(
// 	"Fox 1.6",
// 	"2019",
// 	"vokswagem",
// 	"utilitário",
// 	"4 portas",
// 	"prata",
// 	"12.484",
// 	"R$ 86.54"
// );
//console.log(carro_utilitario);

// const carro_esportivo = new Carro(
// 	"Camaro 6.2 Ss",
// 	"2018",
// 	"chevrolet",
// 	"esportivo conversível",
// 	"2 portas",
// 	"amarelo",
// 	"32.987",
// 	"R$ 489.74"
// );
//console.log(carro_esportivo);
class Utilitario extends Carro {
	constructor(
		veiculo,
		ano_de_fabricacao,
		marca,
		modelo,
		numero_de_portas,
		cor,
		quilometragem,
		valor_da_diaria,
		quantidade_de_passageiros,
		tamanho_do_bagageiro,
		quilometragem_por_litro_combustivel
	) {
		super(
			veiculo,
			ano_de_fabricacao,
			marca,
			modelo,
			numero_de_portas,
			cor,
			quilometragem,
			valor_da_diaria
		);
		this.quantidade_de_passageiros = quantidade_de_passageiros;
		this.tamanho_do_bagageiro = tamanho_do_bagageiro;
		this.quilometragem_por_litro_combustive =
			quilometragem_por_litro_combustivel;
	}
}
const utilitario = new Utilitario(
	"CrossFox 1.6",
	"2019",
	"vokswagem",
	"utilitário",
	"4 portas",
	"prata",
	"12.484",
	"R$ 86.54",
	"5",
	"180 litros",
	"9 km/l"
);

class Esportivo extends Carro {
	constructor(
		veiculo,
		ano_de_fabricacao,
		marca,
		modelo,
		numero_de_portas,
		cor,
		quilometragem,
		valor_da_diaria,
		zero_a_cem
	) {
		super(
			veiculo,
			ano_de_fabricacao,
			marca,
			modelo,
			numero_de_portas,
			cor,
			quilometragem,
			valor_da_diaria,
			zero_a_cem
		);
		this.zero_a_cem = zero_a_cem;
	}
}
const esportivo = new Esportivo("Camaro 6.2 Ss","2018","chevrolet", "esportivo conversível","2 portas","amarelo","32.987","R$ 489.74", "12s"
)
class Pessoa {
	constructor(nome, idade, data_nascimento, endereco, telefone_celular, email) {
		this.nome = nome;
		this.idade = idade;
		this.data_nascimento = data_nascimento;
		this.endereco = endereco;
		this.telefone_celular = telefone_celular;
		this.email = email;
	}
}
const pessoa1 = new Pessoa(
	"Yanka",
	"94 anos",
	"12/12/2012",
	"Santa Rita do Passa Quatro, São Paulo",
	"(011) 9 9999-999",
	"yanka@gmail.com"
);

console.log(utilitario);
console.log(esportivo);
console.log(pessoa1);
