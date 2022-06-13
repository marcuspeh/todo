import app from './app'
import { dataSource } from './data-source'

const PORT:number = 3000

dataSource.initialize()
  .then(() => {
    app.listen(PORT)
    console.log(`Listening on port ${PORT}`)
  })
  .catch(console.error)