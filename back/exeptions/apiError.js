module.exports = class ApiError extends Error
{
    status = null;
    errors = null;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static unauthorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    }
    static badRequest(message, errors = [] ) {
        return new ApiError(400, message, errors)
    }

}
