import 'dotenv/config'
import { app } from './app/app.js'
import { PORT } from './config/server.confin.js'
import { connectDB } from './app/mongoose.js'


connectDB()
app.listen(PORT, () => {console.log(`escuchando en puerto ${PORT}`)})