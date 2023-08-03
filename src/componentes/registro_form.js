import React from 'react';

function Registro(props) {
const {idDiv, nome, sobrenome, nascimento, cidade, email} = props;
    return (<>
            <div id={idDiv}>
                <h2>Registro</h2>
                <p>NOME: {nome}</p>
                <p>SOBRENOME: {sobrenome}</p>
                <p>NASCIMENTO: {nascimento}</p>
                <p>CIDADE: {cidade}</p>
                <p>E-MAIL: {email}</p>
            </div>
            </>
    )
  }

export default Registro;