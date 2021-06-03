export default class BaseController{

    /**
     * @protected
     * @param data
     * @param message
     * @returns {{data, message: null, status: string}}
     */
    static success(data, message = null){
        return {
            status: 'success',
            data: data,
            message: message
        }
    }

    /**
     * @protected
     * @param message
     * @param data
     * @returns {{data: null, message, status: string}}
     */
    static error(message, errors = null){
        return {
            status: 'error',
            message: message,
            errors: errors,

        }
    }
}

