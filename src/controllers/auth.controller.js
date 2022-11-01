import logger from '../config/logger.js'

export default {
    show: (request, response, next) => {
        logger.debug('Upload successful!')
        response.json({
            status: 200
        })
    },
    register: (request, response, next) => {
        response.json({
            message: 'success'
        })
    }
}
