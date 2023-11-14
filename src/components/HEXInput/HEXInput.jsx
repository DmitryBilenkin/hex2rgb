import { useState } from 'react';
import validateHEXInput from './validateHEXInput';

import './HEXInput.css';

function HEXInput(props) {
  const [HEXCode, setHEXCode] = useState('');

  function enterHEXCodeHandler(event){
    setHEXCode(event.target.value);
  };
  
  if(HEXCode.length === 7){
    const codeAfterValidate = validateHEXInput(HEXCode);
    props.onCodeAfterValidate(codeAfterValidate);
  };

  return (
    <input className='input-HEX' type='text' onChange={enterHEXCodeHandler} maxLength='7' placeholder='Введите HEX-код'/>
  );
};

export default HEXInput;
