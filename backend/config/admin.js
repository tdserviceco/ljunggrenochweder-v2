module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b418b74a0d2a1760c1375451d4111454'),
  },
});
