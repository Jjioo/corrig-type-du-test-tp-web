const express = require("express")
const app= express()
app.set("view engine","ejs")
app.set("views","./views")
// Q2 a)importer profiles,findByUserName
const {profiles,findByUserName}= require("./model/userprofiles")
app.get("/",(_,res)=>{
    // Q2 b) renvoyer les profils
    res.json(profiles)
})
app.get("/profile/:username",(req,res)=>{
    // Q3 renvoyer le profil
    const {username}= req.params
    const userProfile= findByUserName(username)
    if(userProfile) {
        //Q3
        //res.json(userProfile)
        //Q5
       const {avatar:photoProfile,
        username:nomUtilisateur,
            email:mail}=userProfile
        res.render("profile",{photoProfile,nomUtilisateur,mail})
        return
    }
    // rediriger sion
    res.redirect("/")
})
app.use((req,res)=>{
    res.json({erreur:`${req.url} est introuvable.`})
})
app.listen(3000)