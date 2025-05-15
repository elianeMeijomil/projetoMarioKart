/*
Analise o fluxograma abaixo e marque a opção correta:
*1 ponto

A imagem mostra um fluxograma que descreve um algoritmo para percorrer e imprimir os valores de uma lista de idades.

1. Início: Representado por um oval com a palavra "Início".
2. Atribuição da Lista de Idades: um retângulo onde é feita a atribuição da lista de idades à variável idades. A lista de idades é: [9, 8, 6, 10, 7, 3, 2].
3. Inicialização da Variável pos: um retângulo onde a variável pos é inicializada com o valor 0.
4. Condição: Um losango verifica se pos é menor que 7. Esta condição é avaliada para determinar se o loop deve continuar.
5. Impressão do Valor da Posição Atual:
Se a condição for verdadeira (representada por uma seta marcada com "V"), um retângulo imprime o valor da posição atual da lista idades na forma: "valor da posição ", pos, " = ", idades[pos].
Depois da impressão, a variável pos é incrementada em 1 (pos = pos + 1), representado por outro retângulo.
6. Fim do Loop: O fluxo retorna para a condição, verificando novamente se pos é menor que 7.
Se a condição for falsa (representada por uma seta marcada com "F"), o fluxo segue para o fim.
7. Fim: Representado por um oval com a palavra "Fim".

*/
let idades = [9,8,6,10,7,3,2];
for (pos=0;pos<7;pos++){
    console.log(`valor da posição ${pos} = ${idades[pos]}`)
}