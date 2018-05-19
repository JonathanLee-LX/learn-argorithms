

class ST<T, K>{
    put(key: T, value: K) {
        this[key] = value
    }
    get(key: T, counts: K) {
        return this[key]
    }
    contains(key: T) {
        return this.get(key)
    }
}



const fs = require('fs')
const txt = fs.readFileSync('tiny-tale.txt', 'utf8')
const arr = txt.split(' ')
// console.log(txt)
// console.log(arr)
const st = new ST<string, number>();

arr.forEach((word, i) =>{
    if(!st.contains(word))
        st.put(word, 1)
    else
        st.put(word, st.get(word) + 1)
    
})

for(let key in st){
    console.log(`${key} has ${st[key]}`)
}
// console.log(st)
// const minLen = 2;


module.exports = ST
