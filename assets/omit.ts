interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

//Omit faz que uma propriedade seja 'não requirida'
interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileiro = {
    
}
