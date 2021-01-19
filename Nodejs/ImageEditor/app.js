const sharp = require('sharp');

let path = process.argv[2];
let width = Number(process.argv[3]);


function resize(inputPath, outputPath, width) {
    
    sharp(inputPath).resize({width: width})
    .toFile(outputPath, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('Imagem redimensionada com sucesso');
        }
    });
    
}

function compress(pathInput, outputPath) {
    
}

resize(path, './temp/output_resize.jpg', width);