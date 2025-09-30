import logger from './logger';

export const logStartupInfo = () => {
  logger.info(`Ambiente: ${process.env.NODE_ENV || 'não definido'}`);
  logger.info(`Porta: ${process.env.PORT || 'não definida'}`);
  logger.info(`Banco de dados: ${process.env.DATABASE_URL?.slice(0, 30)}...`);
  logger.info(`Modo de debug: ${process.env.DEBUG || 'desativado'}`);
};