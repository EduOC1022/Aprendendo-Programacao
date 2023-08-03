import React from 'react';

function Botao(props) {
const {funcao, id, className, onClick} = props;
    return (<>
    
            <button id={id} className={className} onClick={onClick}>{funcao}</button>
            </>
    )
  }

export default Botao;