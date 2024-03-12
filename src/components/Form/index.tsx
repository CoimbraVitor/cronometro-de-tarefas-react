import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Form({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  function enviar(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={enviar}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione uma ação</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
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
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          id="tempo"
          min="00:00:00"
          max="10:00:00"
        />
      </div>
      <Button type="submit">Botão</Button>
    </form>
  );
}

export default Form;
