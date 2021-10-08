const express = require('express')
const PORT = process.env.PORT || 5000

const app =  express()

function arvoNumero(alaraja, ylaraja) {
    return Math.floor(ylaraja * Math.random()) + alaraja
}

app.get('/',function (req, res) {
    let numerolista = [
        arvonumero(0.5),
        arvonumero(10.15),
        arvonumero(100.500),
        arvonumero(10.20),
        arvonumero(0.5)
      ]

  res.json(numerolista)
})

app.listen(PORT)
