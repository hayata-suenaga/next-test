import { Todo } from "@prisma/client";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li>
      <input id={todo.id} type="checkbox" className="cursor-pointer peer" />
      <label
        htmlFor={todo.id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {todo.title}
      </label>
    </li>
  );
}
