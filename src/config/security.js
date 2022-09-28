require('dotenv').config()


console.log('chegou em seurity')

module.exports= {
    private_key : process.env.jwt_private_key
}