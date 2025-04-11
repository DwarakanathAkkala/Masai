function pineTree(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        str += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }
    console.log(str);
}

pineTree(5);