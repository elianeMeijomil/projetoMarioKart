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