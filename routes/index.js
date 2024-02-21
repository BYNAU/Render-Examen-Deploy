const express = require("express")
const router = express.Router()
const dbConn = require("../bd.js")
const Producto = require("../models/Products.js")

router.get("/",async (req,res) => {
    
    const lista = await Producto.find({})
    res.render("index",{lista})
        
})

router.get("/:nombre",async (req,res) => {
    const elnombre = req.params.nombre
    const lista = await Producto.find({nombre: elnombre})
    res.render("index",{lista})
        
})


router.get("/deleteone/:nombre", async (req,res) => {
    const deleteOne = req.params.nombre
    const eliminar = await Producto.findOneAndDelete({nombre:deleteOne})
    res.redirect("/")
})

router.get("/addone/:nombre", async (req,res) => {
    const user = req.params.nombre
    const nuevoProducto =  new Producto({
        nombre: user
    })
    await nuevoProducto.save()
    res.redirect("/")
})

router.get("/update/:nombre/:amodificar", async (req,res) => {
    const usuario = req.params.nombre
    const nuevoContent = req.params.amodificar

    let doc = await Producto.findOne({ nombre:usuario })

    await Producto.updateOne(doc, {nombre:nuevoContent})

    res.redirect("/")

})












module.exports = router