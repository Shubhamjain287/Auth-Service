const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const bcrypt = require("bcrypt");
const { response } = require("express");
const AppError = require("../utils/error-handler");

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
            if(error.name == "SequelizeValidationError"){
                throw error;
            }
            // throw new AppError('ServerError','Something Went Wrong In Service Layer', 'Logical Issue Found',500);
            throw error;
        }
    }

    async signIn(email,password){
        try {
            const user = await this.userRepository.getByEmail(email);
            const passwordMatch = this.checkPassword(password,user.password);

            if(!passwordMatch){
                console.log(`Password Does't Match`);
                throw {error: `Incorrect password`}
            }

            const newJWTToken = this.createToken({email:user.email, id: user.id});
            return newJWTToken;

        } catch (error) {
            console.log(`Something went wrong in the sign in Process`);
            throw error;
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

    async isAuthenticated(token){
        try {
            const response = this.verifyToken(token);

            if(!response){
                throw {error: `Invalid Token`}
            }

            const user = await this.userRepository.getById(response.id);

            if(!user){
                throw {error: `No User with the corresponding token exists`}
            }

            return user.id;

        } catch (error) {
            console.log(`Something went wrong on Service Layer`);
            throw error;
        }
    }

    createToken(user){
        try {
            const result = jwt.sign(user,JWT_KEY,{
                expiresIn: '1d'
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
            console.log(`Something went in token validation`);
            throw error;
        }
    }

    checkPassword(userPassword, encryptedPassword){
        try {
            const response = bcrypt.compareSync(userPassword,encryptedPassword);
            return response;
        } catch (error) {
            console.log(`Something went in password Checking`);
            throw error;
        }
    }

    isAdmin(userId){
        try {
            return this.userRepository.isAdmin(userId);
        } catch (error) {
            console.log(`Something went in password Checking`);
            throw error;
        }
    }

}

module.exports = UserService;