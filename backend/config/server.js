module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 8082),
});
