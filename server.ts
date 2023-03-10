import cors from 'cors'
import express from 'express'
import BooksRoutes from "./routes/BooksRoutes"

import "dotenv/config";
import './database/connect'
import HistoryRoutes from './routes/HistoryRoutes';

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


const app = express()
app.use(cors())

app.use(express.json())

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}...`)
})

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Books API',
            description: 'API for books management app',
            contact: {
                name: 'Luc Vigneron & Remy Cottrez'
            },
            servers: [{
                url:`http://localhost:5000`,
                description: 'localhost'
            },],
        },
    },
    apis: [`./routes/*.ts`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/api/books', BooksRoutes)
app.use('/api/history', HistoryRoutes)