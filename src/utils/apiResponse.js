class apiResponse {
    constructor(statusCode, success, message, data) {
        this.statusCode = statusCode < 400
        this.success = success
        this.message = massage
        this.data = data
    }
}