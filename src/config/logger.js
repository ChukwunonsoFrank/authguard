import pino from 'pino'

export default pino({
    level: process.env.PINO_LOGGER_LEVEL || 'info'
})