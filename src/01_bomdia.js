let x = 100
let y = 200
let qtd_bomdia = 0;
let qtd_boatarde = 0;
let qtd_boanoite = 0;

for (i=0;i<x;i++){
    console.log('bom dia')
    qtd_bomdia++
    for(j=0;j<y; j++){
        console.log('boa tarde')
        qtd_boatarde++
    }
}
console.log('boa noite')
qtd_boanoite++
console.log()
console.log(`quantidade de bom dia impressa: ${qtd_bomdia}`)
console.log(`quantidade de boa tarde impressa: ${qtd_boatarde}`)
console.log(`quantidade de boa noite impressa: ${qtd_boanoite}`)
