#!/bin/bash

# Shutdown NGINX and NGROK
sudo service nginx stop
pkill ngrok

# Clone your repository (latest changes, git pull)
git pull

# Turn on NGINX
sudo service nginx start

# Forward port 80 using NGROK http and Display the NGROK URL
ngrok http 80 --log stdout | grep -Eo 'https://[a-zA-Z0-9.-]+\.ngrok-free\.app'
