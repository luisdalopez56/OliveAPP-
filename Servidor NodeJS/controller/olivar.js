
const olivar = require('../models/olivar')
function getOlivar(req, res){
    let olivarParcela = req.params.olivarParcela

    olivar.findById(olivarParcela, (err, olivar) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if(!olivar) return res.status(404).send({message: `El olivar no existe`})

        res.status(200).send({olivar: olivar})
    });
}

function getOlivares(req, res){
    olivar.find({},(err, olivares) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`})
        if(!olivares) return res.status(404).send({message: `No existen olivares`})

        res.send(200, {olivares})
    })
}

function saveOlivar(req, res){
    console.log(`POST /api/olivar`)
    console.log(req.body)

    let Olivar = new olivar()
    Olivar._id = req.body.parcela
    Olivar.parcela = req.body.parcela
    Olivar.numeroOlivas = req.body.numeroOlivas
    Olivar.propietario = req.body.propietario
    Olivar.localidad = req.body.localidad
    Olivar.variedad = req.body.variedad

    Olivar.save((err, OlivarStored)  => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos`})
    res.status(200).send({olivar: OlivarStored})
    })
}

function updateOlivar(req, res){
    let OlivarParcela = req.params.OlivarParcela
    let update = req.body
    olivar.findByIdAndUpdate(OlivarParcela, update, (err, OlivarUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el Olivaro ${err}`})

        res.status(200).send({olivar: OlivarUpdated})
    } )
}

function deleteOlivar(req, res){
    let olivarParcela = req.params.olivarParcela

    olivar.findById(olivarParcela, (err, olivar) => {
        if (err) res.status(500).send({message: `Error al borrar el Olivar ${err}`})
        olivar.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el Olivar ${err}`})
            res.status(200).send({message: `El Olivar ha sido eliminado`})

        })
    })
}

module.exports = {
    getOlivar,
    saveOlivar,
    getOlivares,
    updateOlivar,
    deleteOlivar
}