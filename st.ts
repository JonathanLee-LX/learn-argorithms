class ST<T, K> {
    put<T, K>(key, i){
        this[key] = i
    }
    get<T, K>(key){
        return this[key]
    }
}

const str = 'hello world';

const st = new ST();

for(let i = 0; i < str.length; i++){
    let key = str[i]
    st.put(key, i)
}

for(let i = 0; i < str.length; i++){
    console.log(st.get(str[i]))
}

