export default {
  PORT: process.env.PORT || process.env.DBWEBB_PORT || 8080,
  DB_URL: process.env.DB_URL || process.env.DBWEBB_DSN || 'mongodb://localhost:27017',
  GRAPHQL_PATH: '/graphql',
  JWT_SECRET: 'LFoljOEDdS4KDCwjMbiOyqWlgU6vqf1t2a2XJWLdiJeF3MkfnCd86ivXLIutUZwC',
};
