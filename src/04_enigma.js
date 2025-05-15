
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