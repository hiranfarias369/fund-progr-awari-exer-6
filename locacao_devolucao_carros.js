class Carro {
	constructor(
		veiculo,
		placa,
		ano_de_fabricacao,
		marca,
		modelo,
		numero_de_portas,
		cor,
		quilometragem,
		valor_da_diaria
	) {
		this.veiculo = veiculo;
		this.placa = placa;
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
		placa,
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
			placa,
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
	"KKK 2378",
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
		placa,
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
			placa,
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
const esportivo = new Esportivo(
	"Camaro 6.2 Ss",
	"CAM 1213",
	"2018",
	"chevrolet",
	"esportivo conversível",
	"2 portas",
	"amarelo",
	"32.987",
	"R$ 489.74",
	"12s"
);
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
class Cliente extends Pessoa {
	constructor(
		nome,
		idade,
		data_nascimento,
		endereco,
		telefone_celular,
		email,
		cpf,
		numero_carteira_motorista,
		foto_carteira_motorista,
		ano_vencimento_carteira_motorista
	) {
		super(
			nome,
			idade,
			data_nascimento,
			endereco,
			telefone_celular,
			email,
			cpf,
			numero_carteira_motorista,
			foto_carteira_motorista,
			ano_vencimento_carteira_motorista
		);
		this.cpf = cpf;
		this.numero_carteira_motorista = numero_carteira_motorista;
		this.foto_carteira_motorista = foto_carteira_motorista;
		this.ano_vencimento_carteira_motorista = ano_vencimento_carteira_motorista;
	}
}
const cliente = new Cliente(
	"Antonio Treze de Junho de Mil Novecentos e Dezessete",
	"94 anos",
	"12/12/1922",
	"Santa Rita do Passa Quatro, São Paulo",
	"(011) 9 9999-999",
	"antoniotreze@gmail.com",
	"82112150120",
	"2354242531",
	"https://github.com/hiranfarias369",
	"2032"
);
// const pessoa1 = new Pessoa(
// 	"Yanka",
// 	"100 anos",
// 	"12/12/2012",
// 	"Santa Rita do Passa Quatro, São Paulo",
// 	"(011) 9 9999-999",
// 	"yanka@gmail.com"
// );
// console.log(pessoa1);
class Funcionario extends Pessoa {
	constructor(
		nome,
		idade,
		data_nascimento,
		endereco,
		telefone_celular,
		email,
		cpf,
		data_contratacao,
		salario,
		quantidade_alugueis,
		status,
		login,
		senha
	) {
		super(
			nome,
			idade,
			data_nascimento,
			endereco,
			telefone_celular,
			email,
			cpf,
			data_contratacao,
			salario,
			quantidade_alugueis,
			status,
			login,
			senha
		);
		this.cpf = cpf;
		this.data_contratacao = data_contratacao;
		this.salario = salario;
		this.quantidade_alugueis = quantidade_alugueis;
		this.status = status;
		this.login = login;
		this.senha = senha;
	}
}
const funcionario = new Funcionario(
	"Excelsa Teresinha Sulfúrico Cavalcante Silva",
	"32 anos",
	"1990",
	"Rua Borboletas Psicodélicas São Paulo",
	"(011) 9 987 6543",
	"excelsasilva@gmail.com",
	"17646180840",
	"13/12/2019",
	"R$ 2.513,13",
	"800",
	"ativo",
	"excelsa1234",
	"313113"
);
class Reserva {
	constructor(cliente, cpf, codigo, data_da_retirada, data_da_entrega, status, ) {
		this.cliente = cliente;
		this.cpf = cpf;
		this.codigo = codigo;
		this.data_da_retirada = data_da_retirada;
		this.data_da_entrega = data_da_entrega;
		this.status = status;
	}
}
const reserva = new Reserva(
	"Zeca G. Caio Pinto",
	"54678945769",
	"carro_esportivo",
	"23/02/2023",
	"25/02/2023",
	"Alugado"
);

console.log(utilitario);
console.log(esportivo);
console.log(cliente);
console.log(funcionario);
console.log(reserva);
