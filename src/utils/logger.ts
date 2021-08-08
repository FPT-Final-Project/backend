import pino from 'pino';

const logger = pino({
  name: 'app-name',
  level: 'debug',
});

const info = (message: string) => {
  logger.info({}, message);
};

const success = (message: string) => {
  logger.success({}, message);
};
const error = (message: string) => {
  logger.error({}, message);
};

export default {
  info,
  success,
  error,
};
