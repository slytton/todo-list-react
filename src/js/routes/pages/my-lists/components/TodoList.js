import React from 'react';

export default function TodoList(props) {
  function showDescription() {
    if(props.list.attributes.description){
      return (<ul>
        <li>{props.list.attributes.description}</li>
      </ul>);
    }else{
      return "";
    }
  }
  return (
    <li>
      {props.list.attributes.title}
      {showDescription()}
    </li>
  )
}
