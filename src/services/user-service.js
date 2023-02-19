const UserRepository = require("../repository/user-repository");

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
            throw {error};
        }
    }

}

module.exports = UserService