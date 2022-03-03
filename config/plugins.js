module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      service: 'Gmail',
      host: process.env.GMAIL_HOST,
      port: process.env.GMAIL_PORT,
      ssl: true,
      tls: true,

      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: 'noreply@recipee.com',
      defaultReplyTo: 'nonreply@recipee.com',
    },
  },
});
