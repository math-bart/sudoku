import React from 'react';
import style from './TodoList.css';

const List = props => {
  const todoListElements = props.list.map((element, index) => <div key={index} id={index} className={style.tile} ><input id={index} min='0' max='9' value={element} onChange={(event) => props.change(event, index)}/> </div>)
  return (
    <div className={style.board}>{todoListElements}</div>
  )
}

export default List;