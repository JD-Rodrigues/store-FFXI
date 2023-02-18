const express = require('express')
const cors = require('cors')
const {router} = require('./routes')

require('dotenv').config()

export const app = express()

app.use(cors({origin: '*'}))
app.use(express.json())
app.use(router)

const port = process.env.PORT

app.listen(port,()=>console.info('Server ON in port' + port))

