import React from "react";

export default function Textarea({name, label, isRequired, update, reset}) {
  const [text, setText] = React.useState("");

  function handleChange({target}) {
    setText(target.value);
  }

  function handleBlur() {
    if(text) update(name, text);
  }

  React.useLayoutEffect(() => {
    if(reset) {
      setText('');
    }
  }, [reset]);
  
  return (
    <fieldset style={{width: "100%"}}>
      <label htmlFor={name}>{label}</label>
      <textarea onChange={handleChange} onBlur={handleBlur} name={name} id={name} cols="30" rows="10" value={text} required={isRequired}></textarea>
    </fieldset>
  );
}
