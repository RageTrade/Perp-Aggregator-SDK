import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import testApi from './routes/api/testApi'

const app = express()

// Express configuration
app.use(cors())
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        frameAncestors: ['none']
      }
    }
  })
)
app.set('port', process.env.PORT || 5000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// @route   GET /
// @desc    Test Base API
// @access  Public
app.get('/', (_req, res) => {
  res.send('API Running')
})
app.use('/api/testApi', testApi)

const port = app.get('port')
const server = app.listen(port, () => console.log(`Server started on port ${port}`))

export default server
