import './Main.css';
import { useState } from 'react';
import HEXInput from '../HEXInput/HEXInput';
import RGBView from '../RGBView/RGBView';
import rgbTranslator from './rgbTranslator';

function Main() {
const [hexToRgb, setHexToRgb] = useState('');
const [bgColor, setBgColor] = useState('#34495e')

function codeAfterValidateHandler(code){
  if(code === 'Ошибка!'){
    setHexToRgb(code);
    setBgColor('#f54248');
  } else {
    setHexToRgb(rgbTranslator(code));
    setBgColor(code);
  };
};

  return (
    <div className='main-container' style={{backgroundColor: bgColor}}>
      <HEXInput onCodeAfterValidate={codeAfterValidateHandler}/>
      <RGBView RGB={hexToRgb}/>
    </div>
  )
};

export default Main;
