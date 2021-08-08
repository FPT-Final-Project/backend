import pino from 'pino';

const logger = pino({
  name: 'app-name',
  level: 'debug',
});

const info = (message: string) => {
  logger.info({}, message);
};

const error = (message: string) => {
  logger.error({}, message);
};

export default {
  info,
  error,
};
