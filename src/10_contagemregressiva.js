/*

Considere o fluxograma abaixo e marque a alternativa que contém a saída do mesmo. Obs: i-= 1 é o mesmo que i = i - 1
*1 ponto
A imagem mostra um fluxograma que representa um algoritmo. O fluxograma é composto pelos seguintes elementos:

1. Início: Representado por um oval com a palavra "início".
2. Atribuição de Valor: um retângulo com o texto i = 10, indicando que a variável i é inicializada com o valor 10.
3. Condição i >= 0: um losango que verifica se i é maior ou igual a 0.
Se a condição for verdadeira, o fluxo segue para o próximo passo.
Se a condição for falsa, o fluxo pula para o fim do algoritmo.
4. Processo i: um retângulo que representa uma operação ou checagem com a variável i.
5. Decremento de i: um retângulo com o texto i -= 1, indicando que a variável i é decrementada em 1 (subtrai 1 do valor atual de i).
6. Verificação Condicional: o fluxo retorna ao losango com a condição i >= 0 para verificar a condição novamente.
Este ciclo se repete até que a condição i >= 0 seja falsa.
7. Fim: Se a condição i >= 0 for falsa, o fluxo segue para um oval com a palavra "fim", indicando o término do algoritmo.

A imagem mostra um fluxograma que representa um algoritmo. O fluxograma é composto pelos seguintes elementos:

*/

for (i=10;i>=0;i--){
    console.log(i)
}
console.log('Fogo!')