// Vinicius
let funcionarios = [
    { funcionario: "Jose Silva", CPF: "123.456.789-00", depto: "D1", Salario: 3550.00 },
    { funcionario: "Maria Souza", CPF: "234.567.890-11", depto: "D1", Salario: 4800.00 },
    { funcionario: "Carlos Pereira", CPF: "345.678.901-22", depto: "D2", Salario: 6200.50 },
    { funcionario: "Ana Oliveira", CPF: "456.789.012-33", depto: "D3", Salario: 3100.00 },
    { funcionario: "Lucas Lima", CPF: "567.890.123-44", depto: "D2", Salario: 5400.00 }
];

export function listarTodos() {
    return funcionarios;
}

export const buscarCPF = (cpf) => {
    return funcionarios.find(p => p.CPF === cpf);
};

export const buscarDepto = (depto) => {
    return funcionarios.filter(p => p.depto === depto);
};

export const maiorSalario = () => {
    if (funcionarios.length === 0) {
        return null;
    }
    return funcionarios.reduce((maior, atual) => {
        return atual.Salario > maior.Salario ? atual : maior;
    });
};

export const criar = ({ CPF, funcionario, Salario, depto }) => {
    const novoFuncionario = { funcionario, CPF, depto, Salario: parseFloat(Salario) };
    funcionarios.push(novoFuncionario);
    return novoFuncionario;
};

// Atualiza um funcionário existente pelo CPF
export const atualizar = (cpf, { funcionario, depto, Salario }) => {
    const index = funcionarios.findIndex(p => p.CPF === cpf);
    if (index === -1) return null;
    
    funcionarios[index] = {
        funcionario,
        CPF: cpf,
        depto,
        Salario: parseFloat(Salario)
    };
    return funcionarios[index];
};

// Remove um funcionário pelo CPF e retorna o item excluído
export const remover = (cpf) => {
    const index = funcionarios.findIndex(p => p.CPF === cpf);
    if (index === -1) return null;
    
    const [funcionarioRemovido] = funcionarios.splice(index, 1);
    return funcionarioRemovido;
};

export default funcionarios;