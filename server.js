import express from 'express'
import cors from "cors"
import database from './config/connection.js'

import tutorRota from './routes/tutor_routes.js'
import petRota from './routes/pet_routes.js'
import alturaRota from './routes/altura_pet_routes.js'
import login from './routes/login_routes.js'

import Tutor from './models/tutor_model.js'
import Pet from './models/pet_model.js'
import Altura from './models/altura_pet_model.js'

const server = express()
server.use(express.json())
server.use(cors())

// Realiza a conexão com o Banco de Dados
try {
    await database.authenticate()
    console.log("Conexão estabelecida com o Banco de Dados!")
} catch (e) {
    console.log("Conexão não etabelecida com o Banco de Dados", e)
}

// Estabele uma associação entre os modelos "Pet" e "Tutor"
Pet.associate = (models) => {
    Curso.hasMany(models.Tutor,
      { foreignKey: 'cpf', as: 'tutores' })
  }

Pet.belongsTo(Tutor, {foreignKey:'cpf',allowNull:true})

// Estabele uma associação entre os modelos "Altura" e "Pet"
Altura.associate = (models) => {
    Curso.hasMany(models.Pet,
      { foreignKey: 'codigo_pet', as: 'pets' })
  }

Altura.belongsTo(Altura, {foreignKey:'codigo_pet',allowNull:true})

server.use(tutorRota)
server.use(petRota)
server.use(alturaRota)
server.use(login)
server.listen(5000, () => console.log("O servidor em execução na porta http://localhost:5000"))