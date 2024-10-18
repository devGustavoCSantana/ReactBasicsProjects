import React from "react";

const MensagemNivel = ({ nivel}) => {
    return(
        <>
        {nivel === 'Iniciante'
        ? 'Bem vindo, Iniciante!'
        : nivel === 'Intermediario'
        ? 'Voce esta progredindo'
        : nivel === 'Avançado'
         ? 'Voce esta especialista'
         : 'Nivel não conhecido'}
        </>
    );
};
export default MensagemNivel