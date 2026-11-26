import * as FuncionariosModel from '../models/funcionariosModels.js'

export const getFuncionarios = (req, res) => {
    const funcionarios = FuncionariosModel.listarTodos()
    res.status(200).json(funcionarios)
}

export const getFuncionarioPorCPF = (req, res) => {
    const { cpf } = req.params
    const funcionario = FuncionariosModel.buscarCPF(cpf)

    if (!funcionario) {
        return res.status(404).json({ erro: "Funcionário não encontrado com esse CPF." })
    }

    res.status(200).json(funcionario)
}

export const getFuncionarioPorDepto = (req, res) => {
    const depto = req.params.depto.trim();
    const funcionariosDepto = FuncionariosModel.buscarDepto(depto);

    if (funcionariosDepto.length > 0) {
        res.status(200).json(funcionariosDepto);
    } else {
        res.status(404).json({
            mensagem: `Nenhum funcionário encontrado no departamento ${depto}`
        });
    }

}

export const postFuncionario = (req, res) => {
    const { funcionario, CPF, depto, Salario } = req.body;

    if (!funcionario || !CPF || !depto || Salario === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos são obrigatórios.'
        });
    }
    const novoFuncionario = FuncionariosModel.criar({
        funcionario,
        CPF,
        depto,
        Salario
    });
    res.status(201).json(novoFuncionario);
};

export const putFuncionario = (req, res) => {
    const { cpf } = req.params
    const { funcionario, CPF, depto, Salario } = req.body
    const funcionarioAtualizado = FuncionariosModel.atualizar(cpf, { funcionario, CPF, depto, Salario });
    if (!funcionarioAtualizado) {
        return res.status(404).json({
            mensagem: `Funcionário com CPF ${cpf} não encontrado para atualização.`
        });
    }
    res.status(200).json(funcionarioAtualizado);
}

// DELETE /produtos/:id
export const deleteFuncionarios = (req, res) => {
    const cpf = req.params.cpf;
    const funcionarioRemovido = FuncionariosModel.remover(cpf);


    if (!funcionarioRemovido) {
        return res.status(404).json({
            mensagem: `Funcionário com CPF ${cpf} não encontrado para exclusão.`
        });
    }
    res.status(200).json({
        mensagem: `Funcionário com CPF ${cpf} removido com sucesso.`,
        funcionario: funcionarioRemovido
    })
}

export const getMaiorSalario = (req, res) => {
    const funcionarioMaiorSalario = FuncionariosModel.maiorSalario()
    res.status(200).json(funcionarioMaiorSalario)
}