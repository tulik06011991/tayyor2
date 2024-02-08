const expres = require('express')
constjwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Model = require('../Model/UserModel')


const register = async (req, res) =>{
    const isExists = await Object.values(req.body).some((item ) =>item===!item)
    if(isExists) {
        res.status(401).json(` hamma bo'sh joylarni to'ldirmadingiz`)
    }
    const User = await Model.findOne(req.body.username)
    if(User){
        res.status(400).json(`bu foydalanuvchi avval ro'yxatdan o'tgan`)
    }
    const ComparePass = await bcrypt.hash(req.body.password, 10)

    const newUser = await Model.create({ ...req.body, password: await ComparePass(req.body.password) });

    const payload = {_id: newUser.id, username: newUser.username}

}