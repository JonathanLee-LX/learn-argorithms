class ST<T, K> {
    // 将key键与i关联起来
    put<T, K>(key, i) {
        this[key] = i
    }
    get<T, K>(key) {
        return this[key]
    }
}

const str = 'hello world';

const st = new ST<string, number>();

for (let i = 0; i < str.length; i++) {
    let key = str[i]
    st.put(key, i)
}

for (let i = 0; i < str.length; i++) {
    console.log(st.get(str[i]))
}

