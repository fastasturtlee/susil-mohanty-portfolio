module.exports = {
  apps: [
    {
      name: 'susil-portfolio',
      script: 'npx',
      args: 'serve dist --listen 3000 --single',
      interpreter: 'none',
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: 'logs/pm2-error.log',
      out_file: 'logs/pm2-out.log',
    },
  ],
}
