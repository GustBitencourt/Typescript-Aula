//readonly faz com que a propriedade seja apenas para leitura e não possa ser modificada após sua criação

interface Cachorro {
    name: string;
    age: number;
    parqueFavorito?: string;
}

//implementando readonly iterando em cada propriedade
type CachorroLeitura = {
    //adicionando readonly e removendo opcionais
    +readonly [k in keyof Cachorro]-?: Cachorro[k]
}

class MeuCachorro implements CachorroLeitura {
    name;
    age;
    parqueFavorito;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }    
}

const jake = new MeuCachorro('Jake', 10);