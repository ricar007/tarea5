var express = require('express')
var router = express.Router()

const {
  Persona
} = require('../sequelize')

/* GET home page. */
router.get('/', (req, res) => {
  Persona.findAll().then(personas => {
    res.render('index', {
      title: 'Agenda',
      personas
    })
  })
})

/* GET perfil page. */
router.get('/perfil/:id', (req, res) => {
  let id = req.params.id
  Persona.findOne({ where: { id: id } }).then(persona => {
    res.render('perfil', {
      title: 'Perfil',
      persona
    })
  })
})

/* GET nueva persona page. */
router.get('/nuevo', (req, res) => {
  res.render('nuevo', {
    title: 'Nueva Persona'
  })
})

/* POST nueva persona */
router.post('/nuevo', (req, res) => {
  console.log(req.body)
  Persona.create(req.body).then(persona => {
    res.redirect('/')
  })

  // Persona.create(
  //   {
  //     nombres: req.body.nombres,
  //     apellidos: req.body.apellidos,
  //     telefono: req.body.telefono
  //   }
  // ).then(persona => {
  //   res.redirect('/')
  // })
})

/* GET editar persona page. */
router.get('/editar/:id', (req, res) => {
  let id = req.params.id
  Persona.findOne({ where: { id: id } }).then(persona => {
    res.render('editar', {
      title: 'Editar',
      persona
    })
  })
})

/* Post editar persona page. */
router.post('/editar/:id', (req, res) => {
  let id = req.params.id
  Persona.findOne({ where: { id: id } }).then(persona => {
    persona.update(req.body).then(() => {
      res.redirect('/')
    })
  })
})

/* GET editar persona page. */
router.get('/eliminar/:id', (req, res) => {
  let id = req.params.id
  Persona.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.redirect('/')
  })
})

module.exports = router
