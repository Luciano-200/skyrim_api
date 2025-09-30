import { createLogger, format, transports } from 'winston';

const infoOnly = format((info) => {
  return info.level === 'info' ? info : false;
});

const isDev = process.env.NODE_ENV !== 'production';

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    // Logs de erro
    new transports.File({ filename: 'logs/error.log', level: 'error' }),

    // Logs de informação
    new transports.File({
  filename: 'logs/info.log',
  format: format.combine(
    infoOnly(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  )
}),

    // Logs combinados (opcional)
    new transports.File({ filename: 'logs/combined.log' }),

    ...(isDev
      ? [
          new transports.Console({
            format: format.combine(
              format.colorize(),
              format.timestamp(),
              format.printf(({ timestamp, level, message }) => {
                return `[${timestamp}] ${level}: ${message}`;
              })
            )
          })
        ]
      : []),

      new transports.File({ filename: 'logs/debug.log', level: 'debug' }),

  ]
});
export default logger;