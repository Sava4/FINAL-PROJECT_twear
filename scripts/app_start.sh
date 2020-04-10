#!/bin/bash
cd /var/www/FEM4Final
runuser -l ubuntu -c 'pm2 start server.js -i 2 --exp-backoff-restart-delay=500'