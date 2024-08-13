const { exec } = require('child_process');
const config = require("./config")
const env = process.env;
const platform = 'web-mobile'; // Nền tảng bạn muốn build, ví dụ: 'web-mobile', 'android', 'ios'
const outputPath = '../build'; // Thư mục output

// const command = `CocosCreator --path . --build "platform=${platform};buildPath=${outputPath}"`;

console.log("Compiling project...");
let buildCmd = `${config.COCOS_PATH} --nologin --project ../ --build "platform=${platform};buildPath=${outputPath}"`;
// let buildCmd = `echo Heelo`;
exec(buildCmd, (err, stdout, stderr) => {
    if (err) {
        console.log("err: " + err);
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`Build successful:\n${stdout}`);
});
