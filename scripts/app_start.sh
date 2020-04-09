#!/bin/bash
cd /var/www/FEM4Final
pm2 start server.js -i 2 --exp-backoff-restart-delay=500