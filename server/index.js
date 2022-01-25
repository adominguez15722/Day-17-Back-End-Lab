const express = require('express')
const cors = require('cors')
const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller')
const app = express()





app.use(cors())
app.use(express.json())


app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)


app.listen(4004, () => console.log('Server running on 4004'))