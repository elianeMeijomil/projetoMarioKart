/*
Assinale a alternativa correta em relação ao fluxograma abaixo:
*1 ponto

A imagem mostra um fluxograma que descreve um algoritmo para calcular a média dos números pares em um vetor. O fluxograma é composto pelos seguintes elementos:

1. Início: Representado por um oval com a palavra "início".
2. Definição da Função: O algoritmo começa com a função mediap(vet, n).
3. Inicialização de Variáveis:
s = 0, cp = 0 e pos = 0
4. Condição Inicial: Um losango que verifica se pos < n.
Se verdadeiro, o algoritmo verifica se vet[pos] % 2 == 0. Se vet[pos] % 2 == 0 for verdadeiro: cp = cp + 1 e 
s = s + vet[pos]
5.Incremento da Posição: Independente do resultado da paridade, pos = pos + 1: Incrementa a posição.
6. Repetição da Condição Inicial: O teste condicional pos < n é repetido até que seja falso.
8. Cálculo da Média: Quando pos < n for falso, o algoritmo calcula e retorna a média dos números pares: s / cp.
9. Fim: Representado por um oval com a palavra "fim".
*/
function mediap (vet,n){
    let s = 0
    let cp = 0
    let log = ''
    
    for (pos=0; pos<n; pos++){
        if(vet[pos]%2==0){
            cp = cp+1;
            s = s+vet[pos]
            if (log != '') log = `${log} + `;
            log = `${log}${vet[pos]}`;
            
        }
    }
    console.log(`(${log}) / ${cp} =`)
    return s/cp;
}

let vet = [40,20,55,35,49,20,12,17,19,31,13,44];
let varmediap = mediap(vet,vet.length);
console.log(varmediap);