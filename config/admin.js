module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'da97357a19f7347382a9333a04767427'),
  },
});
