const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const log = require('./utils/logger');

const PORT = process.env.PORT || 8080;

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
log.info(`app: Starting in [${env}] mode`);

const app = express();

const routes = require('./routes/routes')
app.use('/', routes)

log.info(`app: Setting up cors with options ${JSON.stringify(config[env].cors)}`);
app.use(cors(config[env].cors));

// Middlewares
log.info('app: Loading middlewares');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
log.info(`app: Setting up morgan level ${config[env].logger.morganLevel}`);
app.use(morgan(config[env].logger.morganLevel, { stream: log.stream }));

log.info('app: Finished loading middlewares');

// Start the server
app.listen(PORT, () => log.info(`App listening on port ${PORT}`));

// Catch all unhandled rejections and log
process.on('unhandledrejection', async (reason) => log.error(` Unhandled Rejection at: ${reason.stack || reason}`));

// Testing module
module.exports = app;
