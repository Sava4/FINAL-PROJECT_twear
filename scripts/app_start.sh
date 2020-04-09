#!/bin/bash
cd /var/www/FEM4Final
/home/ubuntu/.nvm/versions/node/v12.16.1/bin/pm2 start server.js -i 2 --exp-backoff-restart-delay=500