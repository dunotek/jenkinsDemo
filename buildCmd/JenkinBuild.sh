#!/bin/bash
sudo apt update -y
sudo apt install curl -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
npm -v
node buildCmd/Build.js
