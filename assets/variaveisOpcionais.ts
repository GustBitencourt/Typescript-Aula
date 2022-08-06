interface IUser {
    id: string;
    email: string;
    /* variavel que pode existir ou não */
    cargo?: 'gerente' | 'coordenador' | 'supervisor';
}

function redireciona(usuario: IUser) {
    if(usuario.cargo) {
        //redireciona usuario.cargo
    }

    //área de usuário

}