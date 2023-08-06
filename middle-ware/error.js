const Errors = require('../exeptions/ApiExeptions');

module.exports = async function(error, req, res){
    if(error instanceof  Errors){
        return res.status(error.status).json({message: error.message, errors: error.errors})
    }
    return res.status(500).json({message: 'Server Error PHP cringe'})
}
