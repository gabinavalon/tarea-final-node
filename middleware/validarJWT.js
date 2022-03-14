const jwt = require('jsonwebtoken');

const validarJWT = (req,res,next) =>{
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg:"No hay token en la petición"
        })
    }

    try {
        const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        console.log('PAYLOAD',payload);
        //si no es válido genera un error
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:'Token no valido'
        })
    }
}

module.exports = {validarJWT};
