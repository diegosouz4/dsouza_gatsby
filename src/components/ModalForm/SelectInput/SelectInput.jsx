import React from "react";

export default function SelectInput({name, label, options, update, reset}) {
  const [selectedOption, setSelectedOption] = React.useState("");

  function handleChange({target}){
    setSelectedOption(target.value);
  }

  React.useLayoutEffect(() => {
    if(selectedOption !== '') {
      update(name, selectedOption);
    }
  }, [selectedOption]);

  React.useLayoutEffect(() => {
    if(reset) {
      setSelectedOption('');
    }
  }, [reset]);

  return (<>
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} required onChange={handleChange} value={selectedOption}>
        <option value="">-- Selecionar --</option>
        {options && options.map((option) => <option key={option} selected={selectedOption === option} value={option}>{option}</option> )}      
      </select>
    </fieldset>
  </>);
}
