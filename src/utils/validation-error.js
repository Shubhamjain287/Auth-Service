const AppError = require("./error-handler");
const { StatusCodes } = require("http-status-codes");


class ValidationError extends AppError {
    constructor(error){
        
        let errorName = error.name;
        let explanation = [];
        error.errors.forEach((err)=>{
            explanation.push(err.message);
        });

        super(
         errorName,
         `Not Able to validate the data send in the request`,
         explanation,
          StatusCodes.BAD_REQUEST  
        )
    }
}

module.exports = ValidationError;

