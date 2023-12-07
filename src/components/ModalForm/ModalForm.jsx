import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { graphql, useStaticQuery } from "gatsby";
import {ButtonLine} from "../Button/Button";
import Input from './Input/Input';
import DiscordService from '../../services/DiscordService';
import SelectInput from "./SelectInput/SelectInput";
import Textarea from "./Textarea/Textarea";
import * as styles from "./ModalForm.module.scss";

const SelectOptions = ["Desenvolvimento web", "Desenvolvimento Blog", "Loja Virtual", "Branding" ];

export default function ModalForm() {
  const [formData, setFormData] = React.useState({data: {}, error: {}});
  const [whatsapp, setWhatsapp] = React.useState(null);
  const [resetForm, setResetForm] = React.useState(false);
  const {showForm, handleModal} = useTheme();

  const { send, sendResponse, resetResponse } = DiscordService();
  const overlay = React.useRef();
  const queryData = useStaticQuery(query).dataJson
  const {description, title} = queryData.contact;
  const {social} = queryData;

  function handleSubmit(event) {
    event.preventDefault();
    const description = Object.entries(formData.data).map((value) => `${value[0]}: ${value[1]}`).join("\n");

    send(description);
    setResetForm(true);
  }

  function updateFormData(name, value){
    setFormData((prev) => {return {...prev, data: {...prev.data, [name]: value}}})
  }

  function handleClickOverlay(event) {
    if(event.target === overlay.current){
      handleModal();
    }
  }

  React.useLayoutEffect(() => {
    const data = social.filter((social) => social.name === "whatsapp" )[0];
    let text = data.url.split('55')[1];
    text = text.replace(/^(\d{2})(\d{5})(\d{4})$/, "$1 $2-$3");
    setWhatsapp({...data, text});
  }, []);

  React.useLayoutEffect(() => {
    const html = document.querySelector('html');
    if(showForm) {
      html.classList.add("notScroll");
      return;
    }
    html.classList.remove("notScroll");
    
  }, [showForm]);

  React.useEffect(() => {
    if(sendResponse.success) {
      setTimeout(() => {
        setResetForm(true);
        handleModal();
        resetResponse();
      }, 2000);
    }
  }, [sendResponse]);

  if(!showForm) return;
  
  return (
    <div ref={overlay} className={styles.wrapper} onClick={handleClickOverlay} >
      <div className={styles.row}>
        <div className={styles.content}>
          { title && <h2>{title}</h2>}
          {description && description.map((text, index) => <p key={index}>{text}</p>)}
          {whatsapp && <a className={styles.whatsapp} href={whatsapp.url}><span dangerouslySetInnerHTML={{__html:whatsapp.icon}}></span> {whatsapp.text}</a>}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="Nome"  name="name" update={updateFormData} isRequired={true} reset={resetForm}/>
          <Input label="Email" type="email" name="email" update={updateFormData} isRequired={true} reset={resetForm}/>
          <Input label="Telefone" type="tel" name="tel" update={updateFormData} isRequired={true} reset={resetForm}/>
          <SelectInput label="Qual o projeto?" options={SelectOptions} name="projeto" update={updateFormData} isRequired={true} reset={resetForm} />
          <Textarea name="Mensagem" label="Mensagem" update={updateFormData} reset={resetForm} />          
          <ButtonLine className={styles.btn}>{sendResponse.loading ? "Enviando..." : "Enviar"}</ButtonLine>
        </form>

        {sendResponse.success && <div className={styles.message}><p>Mensagem enviada</p></div>}
        {sendResponse.error && <div className={`${styles.message} ${styles.error}`}><p>Não foi possível enviar! Por favor tentar novamente mais tarde.</p></div>}
      </div>
    </div>
  );
}


const query = graphql`
  query {
    dataJson {
      contact {
        description
        title
      }

      social {
        icon
        name
        url
      }
    }
  }
`;
