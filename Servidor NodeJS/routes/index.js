


'use strict'

const express = require('express')
const olivarCtrl  = require('../controller/olivar')
const userCtrl = require('../controller/user')
const auth = require ('../middlewares/auth')
const api = express.Router()


//RUTAS PARA OLIVAR
api.get('/olivar',olivarCtrl.getOlivares)
api.get('/olivar/:olivarParcela', olivarCtrl.getOlivar)
api.post('/olivar', olivarCtrl.saveOlivar)
api.put('/olivar/:olivarParcela', olivarCtrl.updateOlivar)
api.delete('/olivar/:olivarParcela',olivarCtrl.deleteOlivar)

//RUTAS PARA LOGIN
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api