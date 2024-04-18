module.exports = {
  apps : [{
    script: 'npm start',
  }], 
  deploy : {
    production : {
      key : 'id_rsa',
      user : 'siin',
      host : '121.162.75.86:2222',
      ref  : 'origin/master',
      repo : 'https://github.com/mmh0705/siin_next_shit.git',
      path : '/home/siin',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options' : 'FowardAgent=yes'
    }
  }
};
