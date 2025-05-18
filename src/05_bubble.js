/*
Considerando os fluxogramas a seguir e os conceitos e exemplos dados em aula sobre funções e vetores, assinale a alternativa que corresponde ao que será exibido na tela caso seja executada a instrução bubble_sort([40,20,50,30,10], 5). Atenção: Há uma imagem do fluxograma com maior resolução anexada à postagem da atividade. *
A imagem mostra quatro fluxogramas que representam diferentes partes de um algoritmo de ordenação conhecido como "bubble sort". Cada fluxograma detalha uma função específica do processo de ordenação. 

Fluxograma 1: bubble_sort(v, n)
1. Início: Representado por um oval com a palavra "início".
2. Chamada da Função exibe: exibe(v, n).
3. Definir Tamanho: Define a variável tam como n.
4. Condição: Um losango verifica se tam é maior que 1.
Se verdadeiro, chama a função empurra(v, tam), em seguida chama a função exibe(v, tam), decrementa tam em 1 e repete o processo.
Se falso, chama a função exibe(v, n).
5. Return: Representado por um oval indicando o retorno.

Fluxograma 2: empurra(v, n)
1. Início: Representado por um oval com a palavra "empurra(v, n)".
2. Inicialização: Define a variável i como 0.
3. Condição: Um losango verifica se i é menor que n - 1.
Se verdadeiro, verifica se v[i] é maior que v[i + 1]. Se for, chama a função troca(v, i, i + 1).
4. Incrementa 1 em i e repete o processo até que i seja maior ou igual a n - 1.
Fim: Representado por um oval indicando o retorno da função.

Fluxograma 3: troca(v, i, j)
1. Início: Representado por um oval com a palavra "troca(v, i, j)".
2. Troca: Armazena v[i] em uma variável temporária temp, atribui v[j] a v[i], e atribui temp a v[j].
3. Fim: Representado por um oval indicando o retorno da função.

Fluxograma 4: exibe(v, n)
1. Início: Representado por um oval com a palavra "exibe(v, n)".
2. Inicialização: Define a variável i como 0.
3. Condição: Um losango verifica se i é menor que n.
Se verdadeiro, exibe v[i] seguido de um espaço e incrementa 1 em i.
Repete o processo até que i seja maior ou igual a n.
4. Exibir Nova Linha: Exibe uma nova linha (\n).
5. Fim: Representado por um oval indicando o retorno da função.

*/

async function troca(v,i,j){
    let temp = v[i];
    v[i] = v[j]
    v[j] = temp
}

async function empurra(v,n){
    for(i=0; i<n-1;i++){
        if (v[i]>v[i+1]) await troca(v,i,i+1)
    }

}

async function exibe(v,n){
    let temp = '';
    for(i=0;i<n;i++){
        temp = `${temp} ${v[i]}` 
    }
    console.log(temp)
}

async function bubble_sort(v,n){
    await exibe(v,n)
     for(tam=n; tam>1; tam--){
        await empurra(v,tam);
        await exibe(v,tam);
    }
    await exibe(v,n);
}

(async function main(){
    await bubble_sort([40,20,50,30,10], 5);
})();