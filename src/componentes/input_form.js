import React from 'react';

function Input(props) {
const {label, id, classe, type} = props;
    return (<>
            <label>{label}</label>
            <input id={id} class={classe} type={type}/>
            <br></br>
            </>
    )
  }

export default Input;