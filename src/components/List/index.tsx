import style from "./List.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefa";

interface Props{
  tarefa: ITarefa[]
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({ tarefa, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Ações</h2>
      <ul>
        {tarefa.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
