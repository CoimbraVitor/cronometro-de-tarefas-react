import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Form extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione uma ação</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="Quer cronometrar o que?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="10:00:00"
          />
        </div>
        <Button>
          Botão 
        </Button>
      </form>
    );
  }
}


export default Form