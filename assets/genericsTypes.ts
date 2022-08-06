//T é uma representação de dado genérico

function adicionarALista<T>(array: any[], valor: T) {
    return array.map(item => item + valor)
}

adicionarALista([1, 3, 4], 'qualquer');