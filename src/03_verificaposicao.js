/*
Considerando os fluxogramas a seguir e os conceitos e exemplos dados em aula sobre funções e vetores, indique o que será exibido na tela.
*1 ponto

O fluxograma está dividido em duas partes principais: o fluxo principal do programa e a função misterio.

Parte Esquerda (Fluxo Principal do Programa):
1. Início: Indica o começo do algoritmo.
2. Definição de a: A variável a é definida como uma lista: ['b', 'x', 'd', 'v', 'e', 'r', 'e', 'p'].
3. Chamada da Função misterio:
r1 = misterio('e', a, 8)
r2 = misterio('z', a, 8)
r3 = misterio('v', a, 3)
4. Decisão: O algoritmo termina e retorna r1, r2, r3.

Parte Direita (Função misterio(x, v, n)):
1. Início da Função: A função começa com i = 0.
2. Condição: Verifica se i < n e v[i] != x.
Se for falso, vai para a próxima condição.
Se for verdadeiro, incrementa i (i += 1) e volta para a condição anterior.
3. Condição: Verifica se i < n.
Se for falso, retorna -1.
Se for verdadeiro, retorna i.
4. Fim da Função: A função termina.

*/
async function misterio (x,v,n){
    let i = 0
    for (i; i<n && v[i]!=x; i++){}
    if (i < n) {
        return i;
    } else {
        return -1;
    }
}

(async function main(){
const a = ['b', 'x', 'd', 'v', 'e', 'r', 'e', 'p']
r1 = await misterio('e', a, 8)
r2 = await misterio('z', a, 8)
r3 = await misterio('v', a, 3)

console.log(r1, r2, r3);
})();