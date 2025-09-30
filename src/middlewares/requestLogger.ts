import { Request, Response, NextFunction } from 'express';
import logger from '../logger';


export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = process.hrtime(); // mais preciso que Date.now()

  res.on('finish', () => {
    const [seconds, nanoseconds] = process.hrtime(start);
    const durationMs = (seconds * 1000 + nanoseconds / 1e6).toFixed(2);

    const { method, originalUrl } = req;
    const status = res.statusCode;
    const ip = req.ip;

    const message = `${method} ${originalUrl} - ${status} - ${durationMs}ms - IP: ${ip}`;

    if (+durationMs > 500) {
      logger.warn(`LENTO: ${message}`);
    } else if (+durationMs > 200) {
      logger.info(`MODERADO: ${message}`);
    } else {
      logger.debug(`RÁPIDO: ${message}`);
    }
  });

  next();
};