// routes/produtoRoutes.js
import { Router } from 'express';
import {getFuncionarios,getFuncionarioPorCPF, getFuncionarioPorDepto, postFuncionario, putFuncionario, deleteFuncionarios, getMaiorSalario} from '../controllers/funcionarioController.js'

const router = Router()

// O prefixo '/produtos' será definido no app.js
router.get('/', getFuncionarios)
router.get('/cpf/:cpf', getFuncionarioPorCPF)
router.get('/maior-salario', getMaiorSalario)
router.get('/depto/:depto', getFuncionarioPorDepto)
router.post('/', postFuncionario)
router.put('/:cpf', putFuncionario)
router.delete('/:cpf', deleteFuncionarios)

export default router