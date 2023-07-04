import pet from "../models/pet_model.js"
import tutor from "../models/tutor_model.js"

// Recupera todos os tutores da tabela tutor
export const getTutores = async (req, res) => {
    try {
        const tutores = await tutor.findAll()
        res.send(tutores)
    } catch (e) {
        console.log("Erro ao acessar a tabela Tutor",e)
    }
}

// Cria um novo tutor na tabela tutor
export const createTutor = async (req, res) => {  
  try {
    await tutor.create(req.body)
      res.json({
        "message":"Um novo registro de tutor foi inserido no Banco de dados"
      })
    } 
    catch (e) {
      console.log("Erro ao Inserir um novo tutor", e)
    }
}

// Atualiza as informações de um tutor na tabela tutor
export const updateTutor = async (req, res) => {
  try {
    await tutor.update(req.body, {
      where: {
        cpf: req.params.cpf
      }
    });
    res.json({
      "message": "Tutor " + req.params.cpf + " foi atualizado"
    });
  } catch (e) {
    console.log("Erro ao atualizar a Cadastro Tutor", e);
  }
}

// Exclui um tutor da tabela tutor
export const deleteTutor = async (req, res) => {
  try {
    await tutor.destroy({
      where: {
        cpf: req.params.cpf
      }
    });
    res.json({
      "message": "O tutor " + req.params.cpf + " Foi excluído do Banco de Dados"
    });
  } catch (e) {
    console.log("Erro ao excluir registro Tutor", e);
  }
}