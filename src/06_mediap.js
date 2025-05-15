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