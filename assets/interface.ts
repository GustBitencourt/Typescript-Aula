function soma(a: number, b: number) {
    return a + b;
}

//interface Animal
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    rugido(alturaEmDecibeis: number): void;
}

//nova interface extendendo outra
interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

//type junta diferentes interfaces
// ou define variavel como interface
type IDomestico = IFelino | ICanino;


const animal: IDomestico = {
    domestico: true,
    nome: 'dog',
    porte: 'pequeno',
    tipo: 'terrestre'
}




