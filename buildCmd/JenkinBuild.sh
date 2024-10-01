#!/bin/bash
sudo apt update -y
sudo apt install -y nodejs
npm -v
node buildCmd/Build.js
