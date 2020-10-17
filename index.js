const app = require('./app')
const port = process.env.PORT || 5000
require('colors')


app.listen(port, () => console.log(`Server has been started on ${port}`.bgCyan.black))
