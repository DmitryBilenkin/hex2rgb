function validateHEXInput(code){
    if(/^#[a-fA-F0-9]{6}/.test(code)){    
        return code;
      } else {
        return 'Ошибка!';
      };
};

export default validateHEXInput;