let temIngresso = false;
let idadeCensura = 16;
let idade = 19;
let acompAdulto = true;

if (temIngresso === true) {
    if (idade >= 16 || acompAdulto == true){
        console.log("Tá liberado cidadão!")
    } else { 
        console.log("Cidadão você será encaminhado a 32° Batalhão")
    }
} else {
    console.log("Cidadão você será encaminhado a 32° Batalhão")
}