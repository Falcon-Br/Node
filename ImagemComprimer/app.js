//Importa o sharp
const sharp = require('sharp');
const compress_images = require('compress-images');
const fs = require('fs');

let path = process.argv[2];
let width = Number( process.argv[3]);

function resize(inputPath, outputPath, width){
    //Método resize precisa de um uma largura e altura, mas só será usado a largura
    sharp(inputPath).resize({width: width})
    //toFile onde armazena a saída (grava a saída), 
    .toFile(outputPath, (error)=>{
        if(error){
            console.log(error);
        }else{
            console.log('Imagem redimensionada com sucesso!');
            compress(outputPath, "./compressed/");
        }
    })
}

function compress(pathInput, outputPath){

    compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true}, false,
        { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
        { png: { engine: 'pngquant', command: ['--quality=20-50'] } },
        { svg: { engine: 'svgo', command: '--multipass' } },
        { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } }, function(error, completed, statistic){
            console.log('------------');
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log('------------');

            fs.unlink(pathInput, (error) => {
                if(error){
                    console.log(error);
                }else{
                    console.log(pathInput, "Apagado com sucesso!");
                }
            })
        });
}

resize(path,'./temp/output_resize.jpg', width);