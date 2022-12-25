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
		_idade,
		_data_nascimento,
		_endereco,
		_telefone_celular,
		_email,
		_cpf,
		_numero_carteira_motorista,
		_foto_carteira_motorista,
		_ano_vencimento_carteira_motorista
	) {
		super(
			nome,
			_idade,
			_data_nascimento,
			_endereco,
			_telefone_celular,
			_email,
			_cpf,
			_numero_carteira_motorista,
			_foto_carteira_motorista,
			_ano_vencimento_carteira_motorista
		);
		this.cpf = _cpf;
		this.numero_carteira_motorista = _numero_carteira_motorista;
		this.foto_carteira_motorista = _foto_carteira_motorista;
		this.ano_vencimento_carteira_motorista = _ano_vencimento_carteira_motorista;
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

class Funcionario extends Pessoa {
	constructor(
		nome,
		_idade,
		_data_nascimento,
		_endereco,
		_telefone_celular,
		_email,
		_cpf,
		_data_contratacao,
		_salario,
		_quantidade_alugueis,
		status,
		_login,
		_senha
	) {
		super(
			nome,
			_idade,
			_data_nascimento,
			_endereco,
			_telefone_celular,
			_email,
			_cpf,
			_data_contratacao,
			_salario,
			_quantidade_alugueis,
			status,
			_login,
			_senha
		);
		this.cpf = _cpf;
		this.data_contratacao = _data_contratacao;
		this.salario = _salario;
		this.quantidade_alugueis = _quantidade_alugueis;
		this.status = status;
		this.login = _login;
		this.senha = _senha;
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
	constructor(
		cliente,
		_cpf,
		codigo,
		data_da_retirada,
		data_da_devolucao,
		status
	) {
		this.cliente = cliente;
		this.cpf = _cpf;
		this.codigo = codigo;
		this.data_da_retirada = data_da_retirada;
		this.data_da_devolucao = data_da_devolucao;
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
class Promocao {
	constructor(email, titulo, descricao, data_de_validade, observacao) {
		this.email = email;
		this.titulo = titulo;
		this.descricao = descricao;
		this.data_de_validade = data_de_validade;
		this.observacao = observacao;
	}
}
const promocao = new Promocao(
	"hiranfarias@gmail.com",
	"Pronto para desfrutar dos melhores carros do mercado!",
	"Alugue hoje seu utilitário com descontos que podem chegar a 10% e pague em até 10x",
	"31/12/2022",
	"consulte a disponibilidade do veículo desejado"
);

console.log(utilitario);
console.log(esportivo);
console.log(cliente);
console.log(funcionario);
console.log(reserva);
console.log(promocao);
