if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const fs = require('fs')
const ejs = require('ejs');

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))

app.get('/store', function (req, res) {
    fs.readFile('items.json', function (error, data) {
        if (error) {
            res.status(500).end()
            // hier den res im weiteren unterbinden
            return;
        } else {
            res.render('store.ejs', {
                // stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
            // hier den res im weiteren unterbinden
            return;
        }
    })
})

app.listen(3000)
