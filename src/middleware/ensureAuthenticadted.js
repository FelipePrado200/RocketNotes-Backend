const {verify} = require("jsonwebtoken");

const AppError = require("../utils/AppError");

const authConfig = require("../configs/auth");


function ensureAuthenticadted(request, response , next){
    const authHeader = require.headers.authorization;

    if(!authHeader){
        throw new AppError("JWT TOKEN não informado", 401)
    }

    const [ , token] = authHeader.split("");  

    try{
        const { sub: user_id } = verify(token , authConfig.jwt.secret)
        request.user ={
            id: Number(user_id),
        }

        return next();
    }catch{
        throw new AppError("JWT TOKEN invalido", 401)
    }
}


module.exports = ensureAuthenticadted;