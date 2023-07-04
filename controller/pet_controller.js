import pet from "../models/pet_model.js"
import altura_pet from "../models/altura_pet_model.js"
import tutor from "../models/tutor_model.js"

// Recupera todos os pets da tabela pet
export const getPet = async (req, res) => {
    try {
        const pets = await pet.findAll()
        res.send(pets)
    } catch (e) {
        console.log("Erro ao acessar a tabela Pet",e)
    }
}

// Recupera os pets pelo CPF do tutor da tabela pet
export const getPetTutor = async (req, res) => {
  try {
    const pets = await pet.findAll({
      where:{cpf: req.params.cpf}
    });
    res.send(pets);
  } catch (e) {
    console.log('Erro ao acessar a tabela Pet', e);
  }
}

// Recupera os pets pela altura  da tabela pet
export const getPetAltura = async (req, res) => {
  try {
    const pets = await pet.findAll({
      where:{altura: req.params.altura}
    });
    res.send(pets);
  } catch (e) {
    console.log('Erro ao acessar a tabela Pet', e);
  }
}

// Cria um novo pet na tabela pet
export const createPet = async (req, res) => {
  const {cpf, altura} = req.body
  const tutorCad = await tutor.findByPk(cpf)
  if(!tutorCad) {
    throw `Não há tutores cadastrados com o cpf ${cpf}`
  }

  try {
    await pet.create(req.body)
      res.json({
        "message":"Um novo registro de pet foi inserido no Banco de dados"
      })
    } 
    catch (e) {
      console.log("Erro ao Inserir um novo pet", e)
    }

    
    let classificacao = "";
    if (altura <= 15) {
      classificacao = "pequeno";
    } else if (altura > 15 && altura < 45) {
      classificacao = "média";
    } else {
      classificacao = "alta";
    }


    // Adiciona os dados na tabela altura_pet conforme a altura indicada
    const alturaData = {
      tipo_altura: classificacao, 
      codigo_pet: req.body.codigo_pet,
    }
    await altura_pet.create(alturaData);
}

// Atualiza as informações de um pet na tabela pet
export const updatePet = async (req, res) => {
  try {
    await pet.update(req.body, {
      where: {
        codigo_pet: req.params.codigo_pet
      }
    });
    res.json({
      "message": "Pet " + req.params.codigo_pet + " foi atualizado"
    });
  } catch (e) {
    console.log("Erro ao atualizar o Cadastro Pet", e);
  }
}

// Exclui um pet da tabela pet
export const deletePet = async (req, res) => {
  try {
    // Exclui a altura do pet da tabela altura_pet
    await altura_pet.destroy({
      where: {
        codigo_pet: req.params.codigo_pet
      }
    });

    await pet.destroy({
      where: {
        codigo_pet: req.params.codigo_pet
      }
    });
    res.json({
      "message": "O pet " + req.params.codigo_pet + " Foi excluído do Banco de Dados"
    });
  } catch (e) {
    console.log("Erro ao excluir registro Pet", e);
  }
}
