
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const olivarSchema = Schema({
    _id: String,
    parcela: {type: Number, required: true, primarykey: true, unique: true},
    numeroOlivas: Number,
    propietario: String,
    localidad: String,
    variedad: String
     
}, { versionKey: false});

module.exports = mongoose.model('olivar', olivarSchema)