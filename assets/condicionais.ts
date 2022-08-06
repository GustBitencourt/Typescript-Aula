interface IUser {
    id: string;
    email: string;
}

interface IAdmin extends IUser {
    cargo: 'gerente' | 'coordenador' | 'supervisor'
}

function redirecionar(usuario: IUser | IAdmin) {
    if('cargo' in usuario) {
        //redireciona administração
    }

    //área de usuário

}

