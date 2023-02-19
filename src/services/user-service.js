const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");

class UserService{

    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(`Something went wrong on Service Layer`);
            throw {error};
        }
    }

    async destroy(userId){
        try {
            const responce = this.userRepository.destory(userId);
            return responce;
        } catch (error) {
            console.log(`Something went wrong on Service Layer`);
            throw error;
        }
    }

    createToken(user){
        try {
            const result = jwt.sign(user,JWT_KEY,{
                expiresIn: '1h'
            });
            return result;
        } catch (error) {
            console.log(`Something went wrong in token creation`);
            throw error;
        }
    }

    verifyToken(token){
        try {
            const responce = jwt.verify(token,JWT_KEY);
            return responce;
        } catch (error) {
            console.log(`Something went i token validation`);
            throw error;
        }
    }





}

module.exports = UserService