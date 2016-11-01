import React from 'react';
import TodoList from './TodoList'

export default function todoLists(props) {
  console.log("TodoLists props: ", props);
  return (
    <ul>
      {props.lists.map((list, i) => <TodoList key={i} list={list} handleDelete={props.handleDelete} />)}
    </ul>
  )
}
