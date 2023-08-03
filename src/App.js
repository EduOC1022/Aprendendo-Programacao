import React, {useState} from 'react';
import Input from './componentes/input_form';
import Botao from './componentes/botao_form';
import Registro from './componentes/registro_form';
import './App.css';

function Formulario() {
  const [registro, novoRegistro] = useState(false);
  const [nome, novoNome] = useState('');
  const [sobrenome, novoSobrenome] = useState('');
  const [nascimento, novoNascimento] = useState('');
  const [cidade, novaCidade] = useState('');
  const [email, novoEmail] = useState('');

  return (
    <>
      <div>
        <h1>Formulário Teste</h1>
      </div>
      <div id="formulario">
        <Input 
        label="NOME:" 
        id="nome" 
        class="input" 
        type="text"
        onChange={(e) => novoNome(e.target.value)}/>
        <Input 
        label="SOBRENOME:" 
        id="sobrenome" 
        class="input" 
        type="text"
        onChange={(e) => novoSobrenome(e.target.value)}/>
        <Input 
        label="NASCIMENTO:" 
        id="nascimento" 
        class="input" 
        type="date"
        onChange={(e) => novoNascimento(e.target.value)}/>
        <Input 
        label="CIDADE:" 
        id="cidade" 
        class="input" 
        type="text"
        onChange={(e) => novaCidade(e.target.value)}/>
        <Input 
        label="E-MAIL"
        id="email" 
        class="input" 
        type="email"
        onChange={(e) => novoEmail(e.target.value)}/>
      </div>
      <div>
        <Botao
        id="limpar"
        className="botao"
        funcao="Limpar Registro"
        onClick={() => novoRegistro(false)}/>
        <Botao 
        id="enviar" 
        className="botao"
        funcao="Enviar"
        onClick={() => novoRegistro(true)}/>
      </div>
      <div>
        {registro && <Registro idDiv="registro" nome={nome} sobrenome={sobrenome} nascimento={nascimento} cidade={cidade} email={email}/>}
      </div>
    </>
  );
}

export default Formulario;








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
