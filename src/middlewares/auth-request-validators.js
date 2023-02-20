const validateUserAuth = (req,res,next) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            data: {},
            success: false,
            message: `Something Went Wrong`,
            err: `Email or Password is missing in the signup request` 
         });
    }

    next();
}

const validateIsAdminRequest = (req,res,next) => {
    if(!req.body.id){
        return res.status(400).json({
            data: {},
            success: false,
            message: `Something Went Wrong`,
            err: `User Id Not Given` 
         }); 
    }

    next();
    
}

module.exports = {
    validateUserAuth,
    validateIsAdminRequest
};