const fs = require('fs-extra')
const { exec, execSync } = require('child_process');
const config = require("./config")
const env = process.env;
const platform = 'web-mobile'; // Nền tảng bạn muốn build, ví dụ: 'web-mobile', 'android', 'ios'
const outputPath = '../build'; // Thư mục output
const buildConfig = ' --project ../ --build "platform=web-desktop;debug=true"';
// const command = `CocosCreator --path . --build "platform=${platform};buildPath=${outputPath}"`;

console.log("Compiling project...");
// let buildCmd = `${config.COCOS_PATH} --nologin --project ../ --build "platform=${platform};buildPath=${outputPath}"`;
// let buildCmd = `echo Hello`;
let buildCmd = config.COCOS_PATH + buildConfig + `;buildPath=${outputPath}`;
execSync(buildCmd, {stdio: 'inherit'});
// exec(buildCmd, (err, stdout, stderr) => {
//     if (err) {
//         console.log("err: " + err);
//         console.error(`Error: ${stderr}`);
//         return;
//     }
//     console.log(`Build successful:\n${stdout}`);
// });
