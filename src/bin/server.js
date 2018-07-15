const app = require('../app');
const { getLogger } = require('../utils');

const logger = getLogger('supernova:server');

const port = process.env.NODE_PORT || 3000;

const server = app.listen(port, () => {
  logger.info(`Listening on ${port}`);
});

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      logger.error(`${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
