import app from './app'
import { dataSource } from './data-source'

dataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT || 3000)
  })
  .catch(console.error)