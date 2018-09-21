module.exports = {
  env: 'development',
  db: 'mongodb://localhost:27017/team_putin',
  port: process.env.PORT || 3001,
  private_secret_key: 'this is a secret key'
};
