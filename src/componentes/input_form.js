import React from 'react';

function Input(props) {
const {label, id, className, type, onChange} = props;
    return (<>
            <label>{label}</label>
            <input id={id} class={className} type={type} onChange={onChange}/>
            <br></br>
            </>
    )
  }

export default Input;