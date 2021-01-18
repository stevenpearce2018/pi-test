module.exports = {
  apps: [
    {
      name: 'pi-test',
      script: 'app.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080,
      },
    },
  ],

};
