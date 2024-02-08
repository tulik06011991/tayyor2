const jwt = require('jsonwebtoken')

const verify = (req, res, next) =>{
    if(!req.headers.authorization){
        res.status(401).json(` no token`)
    }
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'){
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, process.env.SECRET_KEY, (error , data) =>{
            if(error){
                res.status(401).json(` wrong token`)
            }
            else{
                req.user = data;
                next()
            }
        } )
    })
}