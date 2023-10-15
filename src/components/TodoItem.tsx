"use client";

import { Todo } from "@prisma/client";

type TodoItemProps = {
  todo: Todo;
  toggleTodoItem: (id: string, complete: boolean) => void;
};

export default function TodoItem({ todo, toggleTodoItem }: TodoItemProps) {
  return (
    <li>
      <input
        id={todo.id}
        type="checkbox"
        onChange={(e) => toggleTodoItem(todo.id, e.target.checked)}
        className="cursor-pointer peer"
      />
      <label
        htmlFor={todo.id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {todo.title}
      </label>
    </li>
  );
}
