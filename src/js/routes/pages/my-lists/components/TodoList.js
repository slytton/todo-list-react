import React from 'react';

export default function TodoList(props) {

  return (
    <div>
      <li>
        {props.list.attributes.title}
        {showDescription()}
      </li>
      <span onClick={deleteList}>X</span>
    </div>
  )

  function deleteList() {
    props.handleDelete(props.list);
  }

  function showDescription() {
    if(props.list.attributes.description){
      return (<ul>
        <li>{props.list.attributes.description}</li>
      </ul>);
    }else{
      return "";
    }
  }

}
