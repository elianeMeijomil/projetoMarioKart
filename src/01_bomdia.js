/*
Considerando o fluxograma a seguir, assinale a alternativa correta considerando que o usuário dê como entradas os valores 100 e 200, respectivamente.
*1 ponto
A imagem mostra um fluxograma que representa um algoritmo. O fluxograma começa com um oval rotulado "início" e termina com um oval rotulado "fim". Entre esses dois pontos, há várias etapas e decisões:

1. Declaração de variáveis: O algoritmo começa com a declaração de duas variáveis inteiras, x e y sendo número inteiros;
2. Inicialização: A variável i é inicializada com o valor 0.
3. Loop externo: O algoritmo entra em um loop onde verifica se i é menor que x. Se a condição for verdadeira, ele imprime "bom dia".
4. Loop interno: Dentro desse loop, há outro loop que inicializa a variável j com o valor 0 e verifica se j é menor que y. Se a condição for verdadeira, ele imprime "boa tarde" e incrementa 1 em j.
5. Incremento externo: Após sair do loop interno, 1 é incrementado em i.
6. Impressão final: Quando o loop externo termina, o algoritmo imprime "boa noite".

*/
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
