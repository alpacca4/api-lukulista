const express = require('express')
const PORT = process.env.PORT || 5000

const app =  express()

function arvoNumero(alaraja, ylaraja) {
    return Math.floor(ylaraja * Math.random()) + alaraja
}

let NUMEROLISTA = [
        arvonumero(0.5)
        arvonumero(10.15)
        arvonumero(100.500)
        arvonumero(10.20)
        arvonumero(0.5)
      ]
app.get('/',function (req, res) {
  res.send(NUMEROLISTA)
})

app.listen(PORT)
