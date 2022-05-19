import React, { useState } from 'react'
import styles from '../components/todo.module.css';
export const TodoList = ({elem,deleteItem}) => {
    const [strikedItem,setStrikedItem]= useState(elem.isChecked)
    

  return (
    <div className="listDiv"  key={elem.id}>
        <input type="checkbox" checked={strikedItem} onChange={(e)=>{setStrikedItem(e.target.checked)}} />

        <div className={strikedItem ? styles.striked:styles.non}>{elem.value}</div>
        <button>edit</button>
        <button onClick={()=>deleteItem(elem.id)}
         >delete</button>
    </div>
  )
}


// const updatedList = listItems.filter((elem,id)=>{
//   return id!==ind;
// })
// setList(updatedList)inputList