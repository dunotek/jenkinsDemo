#!/bin/bash
function installNPM() {
    execSync('git clean -xfdf', { stdio: 'inherit' });
    execSync(`npm i`, { stdio: 'inherit' });
}
installNPM();
node buildCmd/Build.js
