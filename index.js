
import inquirer from 'inquirer';
import  qr  from 'qr-image';
import fs from 'fs';

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: 'input',
        name: 'URL',
        message: "Enter your URL: ",
}])
.then((answers) => {
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_generator.png"));

    fs.writeFile("qr_generator.txt",url,(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
    
