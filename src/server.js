import app from './app';
import 'dotenv/config'

//app.listen(3030); SUBSTITUI PELA VARIAVEL DE AMBIENTE DO ARQUIVO .ENV

app.listen(process.env.API_PORT)