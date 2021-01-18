module.exports = {
  production: {
    logger: {
      morganLevel: 'tiny',
      level: 'warn',
    },
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
  },
  development: {
    logger: {
      morganLevel: 'dev',
      level: 'debug',
    },
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    },
  },
  test: {
    logger: {
      morganLevel: 'dev',
      level: 'debug',
    },
  },
};
