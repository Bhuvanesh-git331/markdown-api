/**To run this express server use command npm run devStart */

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const port = process.env.port || 3001
const app = express()

//installed the body parser middleware to convert in pu request to json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Success!!')
})

const markDownRouter = require('./Routes/convert')
//added cors middleware as for allowing frontend to make api calls to backend
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

app.use('/convert', markDownRouter)

app.listen(port, () => {
    console.log(`server is runnung on port ${port}`)
})
