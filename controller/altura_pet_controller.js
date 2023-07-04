import altura_pet from "../models/altura_pet_model.js"

// Recuperar todos as alturas associadas aos pets da tabela altura_pet
export const getAltura = async (req, res) => {
    try {
        const altura = await altura_pet.findAll()
        res.send(altura)
    } catch (e) {
        console.log("Erro ao acessar a tabela Altura_pet",e)
    }
}
