const jwt = require("jsonwebtoken");
const jwtKey= "FashionWear";

const generateToken = (id) => {
    return jwt.sign({id} , jwtKey ,{
        expiresIn:"30d",
    })
}

module.exports = generateToken;