import React,{useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function Todo(){
    const[todotext, setTodoText] =useState("");
    const[todos,setTodos] = useState([
        {
            id:1,
            name:'Arman',
            isCompleted:false,
        },
        {
            id:2,
            name:'Saif',
            isCompleted:false
        },
        {
            id:3,
            name:'Akabr',
            isCompleted:true
        }

    ])
    const ChangeTodotext = (e) => {
        setTodoText(e.target.value)        
    };
    const addtodo = () =>{
     const newtodo={
        id:uuidv4(),
        name:todotext,
        isCompleted:false
     };
     setTodos([newtodo,...todos]);
     setTodoText('');
    }
    const CompletedTodo = id  => {
          let update = todos.map(user => {
            if(user.id == id){
                user.isCompleted = true;
                return user;
            }
            return user;
          });
          console.log(update);
          setTodos(update);
    }
    const deletetodo = id =>{
        const updatetodo = todos.filter(user => user.id != id);
        setTodos(updatetodo);
    }
   function clearTodo(){
     clearArray(todos);
   }
   function clearArray(todos) {
    while (todos.length > 0) {
      todos.pop();
    }
  }
    return(
        <div>
            <h2>Todo App</h2>
         <div className="card">
            <div className="card-header">
            <div className="input-group mb-3">
                <input type="text"
                className="form-control"
                placeholder="Enter your name "
                value ={todotext}
                onChange ={(e)=> ChangeTodotext(e)}
                />
                <div className="btm mg-3" >
                    <button className="btn btn-dark mx-3" onClick={addtodo}>add</button>
                </div>
</div>
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {
                        todos.map(user => {
                            return  ( 
                                 <li className="list-group-item d-flex justify-content-between" key={todos.id}>
                                    <div>
                                    <input type="checkbox" checked={user.isCompleted} onChange={ () =>  CompletedTodo(user.id)}/>
                                    <span className={user.isCompleted ? 'completed' : null}> {user.name}</span>
                                    </div>
                                    <i className="fa-solid fa-trash-can" onClick={() => deletetodo(user.id)}></i>
                                 </li>
                            )
                        })
                    }
                    <button className="btn btn-primary my-3" onClick={()=> clearTodo(todos)}>RESET</button>
                </ul>
                
            </div>
         </div>
         </div>
    )
}
export default Todo;