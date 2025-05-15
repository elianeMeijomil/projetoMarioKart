/*
Considerando os fluxogramas a seguir, que juntos compõem o mesmo algoritmo geral, assinale a alternativa que contém a sequência de valores que será exibida na tela ao executar o algoritmo.
*1 ponto

A imagem mostra um fluxograma dividido em três partes principais, representando um algoritmo que manipula e exibe um vetor de inteiros.

Parte 1: Fluxo Principal do Programa (à esquerda)
1. Início: Representado por um oval rotulado "início".
2. Definição do vetor v: Um retângulo que define um vetor v com os valores [10, 20, 30, 40, 50].
3. Chamada da Função enigma: enigma(v, len(v))
4. Chamada da Função exibe: exibe(v, len(v))
5. Fim: Representado por um oval rotulado "fim".

Parte 2: Função enigma(v, n) (no centro)
1. Início: Representado por um oval rotulado "enigma(v, n)".
2. Inicialização de i: Um retângulo que define i = 0.
3. Condição: Um losango que verifica se i < n.
Se verdadeiro, o fluxo continua para o próximo passo.
Se falso, vai para "return".
4. Duplicar valor de v[i]: Um retângulo que define v[i] = 2 * v[i].
5. Incremento de i: Um retângulo que define i += 2.
6. Return: Representado por um oval indicando o retorno da função.

Parte 3: Função exibe(v, n) (à direita)
1. Início: Representado por um oval rotulado "exibe(v, n)".
2. Inicialização de i: Um retângulo que define i = 0.
3. Condição: Um losango que verifica se i < n.
Se verdadeiro, o fluxo continua para o próximo passo.
Se falso, vai para "return".
4. Exibir valor de v[i]: Um retângulo que exibe v[i] com end=' '.
5. Incremento de i: Um retângulo que define i += 1.
6. Return: Representado por um oval indicando o retorno da função.
*/
async function enigma(v, n) {
    for (i=0; i<n;i+=2){v[i] = 2 * v[i]}
}

async function exibe(v, n) {
    for (i=0; i<n ; i++){console.log("> ",v[i],"")}
}

(async function main(){
    const v = [10,20,30,40,50];
    
    await enigma(v,v.length)
    await exibe(v,v.length)
})();