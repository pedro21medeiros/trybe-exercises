let n = 8;
let linha = '';
let espaco = n;

for (let index = 0; index < n; index += 1) {
    for (let i = 0; i <= n; i += 1) {
        if (i < espaco) {
            linha = linha + ' ';
        } else {
            linha = linha + '*';
        };
    };
    console.log(linha);
    linha = '';
    espaco -= 1;
};