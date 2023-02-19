const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req,res) => {
    try {
        const responce = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(500).json({
            data: responce,
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

module.exports = {
    create
}