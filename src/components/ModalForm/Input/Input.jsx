import React from "react";

export default function Input({ label, type, name, isRequired, update, reset }) {
  const [value, setValue] = React.useState('');

  function handleChange({target}) {
    if (target.type === "tel") {
      maskPhone(target);
      return;
    }

    if(target.value) setValue(target.value);
  }

  function maskPhone(input) {
    let maskValue = input.value.replace(/\D/g, "");
    maskValue = maskValue.replace(/^0/, "");
    if(maskValue.length > 10) {
      maskValue = maskValue.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if(maskValue.length > 5){
      maskValue = maskValue.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    }else if(maskValue.length > 2){
      maskValue = maskValue.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else{
      maskValue = maskValue.replace(/^(\d*)/, "($1");
    }

    setValue(maskValue);
  }

  React.useLayoutEffect(() => {
    if(value !== '') {
      update(name, value);
    }
  }, [value]);

  React.useLayoutEffect(() => {
    if(reset) {
      setValue('');
    }
  }, [reset]);

  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type ? type : 'text'} value={value} onChange={handleChange} required={isRequired}/>
      <p>Ops! Alguma coisa errada, tente novamente.</p>
    </fieldset>
  );
}
