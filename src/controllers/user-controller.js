const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req,res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(500).json({
            data: response,
            success: true,
            message: `Successfully Created s User`,
            err: {} 
         });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
           data: {},
           success: false,
           message: `Something Went Wrong`,
           err: error 
        });
    }
}

const signIn = async(req,res) => {
    try {
        const response = await userService.signIn(req.body.email,req.body.password);
        return res.status(500).json({
            data: response,
            success: true,
            message: `Successfully Created s User`,
            err: {} 
         });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
           data: {},
           success: false,
           message: `Something Went Wrong`,
           err: error 
        });
    }
}

const isAuthenticated = async (req,res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data: response,
            success: true,
            message: `User is authenticated and token is Valid`,
            err: {} 
         });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
           data: {},
           success: false,
           message: `Something Went Wrong`,
           err: error 
        });
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated
}