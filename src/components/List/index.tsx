import React from "react";
import style from "./List.module.scss";
import Item from "./Item";

function List() {
  const tarefa = [{ tarefa: "Teste", tempo: "00:00:10" }];
  return (
    <aside className={style.listaTarefas}>
      <h2>Ações</h2>
      <ul>
        {tarefa.map((item, index) => (
          <Item key={index} 
          {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
