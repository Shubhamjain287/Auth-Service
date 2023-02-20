const { StatusCodes } = require("http-status-codes");

class AppError extends Error{
    constructor(
        name = "Apperror",
        message = "Something Went Wrong",
        explanation = "Something Went Wrong",
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ){
        super();
        
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;

    }
}

module.exports = AppError;