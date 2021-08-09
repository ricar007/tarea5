const Sequelize = require('sequelize')
// const CantonModel = require('./models/Canton')
const PersonaModel = require('./models/Persona')

const sequelize = new Sequelize(process.env.DATABASE_URL || 'mysql://root:112358@localhost:3306/agenda', {
  logging: false
})

// const Canton = CantonModel(sequelize, Sequelize)
const Persona = PersonaModel(sequelize, Sequelize)

// Persona.belongsTo(Canton)
// Canton.hasMany(Persona)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`¡Tablas creadas!`)
  })

module.exports = {
  Persona,
  sequelize
}
