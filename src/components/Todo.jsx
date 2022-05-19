import React, { useState } from 'react'
import { TodoList } from './TodoList'


const Todo = () => {
    
    const [input,setInput]=useState("")
    const [inputList,setInputList]=useState([])

    const deleteItem=(id)=>{
        const updatedList=inputList.filter((ele)=>{
          return id!==ele.id
        })
        setInputList(updatedList)
  
  
      }

  return (
    <>
        <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}/>

        <button
        onClick={
                ()=>{
                    if(input)
                        {
                            setInputList([...inputList,{id:Date.now(),value:input,isChecked:false}])
                            setInput('')
                        }
                    }
                }>
        Add</button>

        {inputList.map((elem)=> <TodoList  elem={elem} key={elem.id} deleteItem={deleteItem}/>)}
         
    </>
  )
}

export default Todo
