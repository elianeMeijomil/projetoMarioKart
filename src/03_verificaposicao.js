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