#!/bin/bash
set -e
cd /var/www/FEM4Final
runuser -l ubuntu -c 'npm ci'