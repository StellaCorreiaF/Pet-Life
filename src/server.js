import "dotenv/config";
const app = require("./app")

app.listen(process.env.API_PORT, () => console.log("Servidor Rodando com sucesso ⚡⚡⚡ "));
