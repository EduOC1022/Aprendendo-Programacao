import React from 'react';

function Botao(props) {
const {funcao, id, classe} = props;
    return (<>
            <button id={id} class={classe}>{funcao}</button>
            </>
    )
  }

export default Botao;