class ApiExceptions extends Error {
    super

    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiExceptions(401, 'Не авторизован')
    }

    static BadRequest(message, errors = []) {
        return new ApiExceptions(400, message, errors);
    }
}

module.exports = ApiExceptions;