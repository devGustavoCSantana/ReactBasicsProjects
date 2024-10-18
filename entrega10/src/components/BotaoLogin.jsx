import React from "react";



const BotaoLogin = ( { logado } ) => {

    return(
        <button>
            {logado ? 'Sair' : 'Entrar'}
        </button>
    );
};
export default BotaoLogin;