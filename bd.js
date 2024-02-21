const mongoose = require("mongoose")
const uri = "mongodb://localhost:27017/examen"

const basededatos = async () => {
    await mongoose.connect(uri)
}

try {
    basededatos()
    mongoose.connection.on("open", () => {
        console.log("Conexion exitosa")
    })
} catch (error) {
    mongoose.connection.on("error", () => {
        console.log(error)
    })
}

module.exports = basededatos()