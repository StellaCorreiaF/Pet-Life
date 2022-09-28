import app from './app.js';
import "dotenv/config";

console.log('chegou aqui 2')
app.listen(process.env.API_PORT || process.env.PORT);


