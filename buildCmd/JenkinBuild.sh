#!/bin/bash
const execSync = require('child_process').execSync;
function installNPM() {
    execSync('git clean -xfdf', { stdio: 'inherit' });
    execSync(`npm i`, { stdio: 'inherit' });
}
installNPM();
node buildCmd/Build.js
