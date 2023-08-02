import './App.css';
import React from 'react';
import TituloDescricao from './componentes/titulo_form';
import Input from './componentes/input_form';
import Botao from './componentes/botao_form';

function formulario() {
  
  return (
    <>
      <div>
        <TituloDescricao/>      
      </div>
      <div id="formulario">
        <Input label="NOME:" id="nome" class="input" type="text"></Input>
        <Input label="SOBRENOME:" id="sobrenome" class="input" type="text"></Input>
        <Input label="NASCIMENTO:" id="nascimento" class="input" type="date"></Input>
        <Input label="CIDADE:" id="cidade" class="input" type="text"></Input>
        <Input label="E-MAIL" id="email" class="input" type="email"></Input>
      </div>
      <div>
        <Botao id="enviar" class="botao">Enviar</Botao>
      </div>
    </>
  );
}

export default formulario;








// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
